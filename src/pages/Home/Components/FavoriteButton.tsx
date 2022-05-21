import { Button } from "@mui/material";
import { useEffect } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import useAddFavorites from "../../../shared/hooks/api/useAddFavorites";
import useHeaders from "../../../shared/hooks/useHeaders";
import useRemoveFavorites from "../../../shared/hooks/api/useRemoveFavorites";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

interface Props {
  destination: any;
  onUpdate: () => void;
}

export default function FavoriteButton({ destination, onUpdate }: Props) {
  const { addFavorite, addFavoriteError } = useAddFavorites();
  const { removeFavorite, removeFavoriteError } = useRemoveFavorites();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const headers = useHeaders();

  async function handleFavoriteButton(
    destinationId: number,
    destinationName: string
  ) {
    await addFavorite(destinationId, headers);
    onUpdate();
  }

  useEffect(() => {
    if (addFavoriteError) {
      fireAlert(addFavoriteError.data);
      if (addFavoriteError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [addFavoriteError]);

  async function handleUnfavoriteButton(
    destinationId: number,
    destinationName: string
  ) {
    await removeFavorite(destinationId, headers);
    onUpdate();
  }

  useEffect(() => {
    if (removeFavoriteError) {
      fireAlert(removeFavoriteError.data);
      if (removeFavoriteError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [removeFavoriteError]);

  return (
    <Button
      fullWidth
      variant="contained"
      startIcon={
        destination.favorited ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />
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
      {destination.favorited ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
}
