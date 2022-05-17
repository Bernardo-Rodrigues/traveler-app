import { List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FavoriteDestination from "./FavoriteDestination";
import useListFavorites from "../../../shared/hooks/api/useListFavorites";
import { useEffect } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";

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
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "25px",
        marginTop: "30px",
        height: "45%",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ display: "flex", gap: "15px", alignItems: "center" }}
      >
        Favorites destinations
        <BookmarksIcon />
      </Typography>
      <List
        sx={{
          display: "flex",
          marginTop: "20px",
          gap: "25px",
          height: "87%",
        }}
      >
        {favorites.length === 0 ? (
          <div>You haven&apos;t bookmarked any destination yet</div>
        ) : (
          favorites.map((favorite: any, i: number) => (
            <FavoriteDestination key={i} destination={favorite} />
          ))
        )}
      </List>
    </Box>
  );
}
