import { ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router";

interface Props {
  destination: any;
}

export default function FavoritesDestination({ destination }: Props) {
  const navigate = useNavigate();
  const style = {
    position: "relative",
    height: "100%",
    minWidth: "225px",
    backgroundImage: `url(${destination.imageLink})`,
    backgroundSize: "cover",
    borderRadius: "25px",
    border: "3px solid #2ED29B",
    cursor: "pointer",
  };

  return (
    <ListItem
      sx={style}
      onClick={() => navigate(`/destinies/${destination.name}`)}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          padding: "10px",
          borderRadius: "10px",
          border: "3px solid #2ED29B",
          backgroundColor: "#fff",
        }}
      >
        <Typography fontWeight="bold" variant="h5" sx={{ margin: "0 0 0 5px" }}>
          {destination.name}
        </Typography>
        <Typography sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />{" "}
          {destination.localization}
          <StarBorderOutlinedIcon
            sx={{ marginLeft: "25px", color: "#FF8344" }}
          />
          {destination.score}
        </Typography>
      </Box>
    </ListItem>
  );
}
