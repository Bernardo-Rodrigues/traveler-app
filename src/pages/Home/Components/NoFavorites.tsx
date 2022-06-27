import { Typography, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { LeftMenuButton } from "../../../shared/styles/themes";
import { useNavigate } from "react-router";

export default function NoFavorites() {
  const navigate = useNavigate();

  return (
    <Box sx={styles.noFavorites}>
      <Avatar
        src="https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/scout.jpg"
        sx={{ width: "250px", height: "250px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        <Typography fontWeight="bold">
          You still don&apos;t have favorite destinations
        </Typography>
        <LeftMenuButton
          variant="contained"
          startIcon={<TravelExploreIcon />}
          onClick={() => navigate("/dashboard/destinations")}
        >
          Lets explore the world
        </LeftMenuButton>
      </Box>
    </Box>
  );
}

const styles = {
  noFavorites: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: "50px",
  },
};
