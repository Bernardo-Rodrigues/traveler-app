import { List, Typography, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteDestination from "./FavoriteDestination";
import useListFavorites from "../../../shared/hooks/api/useListFavorites";
import { useEffect } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import NoFavorites from "./NoFavorites";

export default function FavoritesSection() {
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { favorites, loadingFavorites, listingFavoritesrror } =
    useListFavorites();

  useEffect(() => {
    if (listingFavoritesrror) {
      fireAlert(listingFavoritesrror.data);
      if (listingFavoritesrror.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingFavoritesrror]);

  if ((loadingFavorites && !favorites) || !favorites) {
    return <div>loading...</div>;
  }

  return (
    <Box sx={styles.favorites}>
      <Typography variant="h5" fontWeight="bold" sx={styles.title}>
        Favorites destinations
        <BookmarksIcon sx={{ color: "#2ED29B" }} />
      </Typography>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <List sx={styles.list}>
          {favorites.map((favorite: any, i: number) => (
            <FavoriteDestination key={i} destination={favorite} />
          ))}
        </List>
      )}
    </Box>
  );
}

const styles = {
  favorites: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "25px",
    marginTop: "30px",
    height: "45%",
  },
  title: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    marginBottom: "20px",
  },
  list: {
    display: "flex",
    gap: "25px",
    width: "100%",
    height: "87%",
    overflow: "scroll",
  },
};
