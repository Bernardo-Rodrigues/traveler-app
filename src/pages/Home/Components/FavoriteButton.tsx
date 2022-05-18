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
  destiny: any;
  onUpdate: () => void;
}

export default function FavoriteButton({ destiny, onUpdate }: Props) {
  const { addFavorite, addFavoriteError } = useAddFavorites();
  const { removeFavorite, removeFavoriteError } = useRemoveFavorites();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const headers = useHeaders();

  async function handleFavoriteButton(destinyId: number, destinyName: string) {
    await addFavorite(destinyId, headers);
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
    destinyId: number,
    destinyName: string
  ) {
    await removeFavorite(destinyId, headers);
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
        destiny.favorited ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />
      }
      onClick={
        destiny.favorited
          ? () => {
              handleUnfavoriteButton(destiny.id, destiny.name);
            }
          : () => {
              handleFavoriteButton(destiny.id, destiny.name);
            }
      }
    >
      {destiny.favorited ? "Remove from favorites" : "Add to favorites"}
    </Button>
  );
}
