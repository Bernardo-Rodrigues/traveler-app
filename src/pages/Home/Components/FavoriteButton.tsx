import { Button, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import useContexts from "../../../shared/hooks/useContexts";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import useAddFavorites from "../../../shared/hooks/api/useAddFavorites";
import useRemoveFavorites from "../../../shared/hooks/api/useRemoveFavorites";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import { useAuth } from "@clerk/clerk-react";

interface Props {
  destination: any;
  onUpdate: () => void;
}

export default function FavoriteButton({ destination, onUpdate }: Props) {
  const { addFavorite, addFavoriteError, loadingAddFavorite } =
    useAddFavorites();
  const { removeFavorite, removeFavoriteError, loadingRemoveFavorite } =
    useRemoveFavorites();
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const clerkAuth = useAuth();

  async function handleFavoriteButton(
    destinationId: number,
    destinationName: string
  ) {
    await addFavorite(destinationId);
    onUpdate();
  }

  useEffect(() => {
    if (addFavoriteError) {
      setMessage(addFavoriteError.data);
      if (addFavoriteError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [addFavoriteError]);

  async function handleUnfavoriteButton(
    destinationId: number,
    destinationName: string
  ) {
    await removeFavorite(destinationId);
    onUpdate();
  }

  useEffect(() => {
    if (removeFavoriteError) {
      setMessage(removeFavoriteError.data);
      if (removeFavoriteError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [removeFavoriteError]);

  return (
    <Button
      fullWidth
      variant="contained"
      startIcon={
        !(loadingAddFavorite || loadingRemoveFavorite) &&
        (destination.favorited ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />)
      }
      onClick={
        destination.favorited
          ? () => {
              handleUnfavoriteButton(destination.id, destination.name);
            }
          : () => {
              handleFavoriteButton(destination.id, destination.name);
            }
      }
    >
      {loadingAddFavorite || loadingRemoveFavorite ? (
        <CircularProgress />
      ) : destination.favorited ? (
        "Remove from favorites"
      ) : (
        "Add to favorites"
      )}
    </Button>
  );
}
