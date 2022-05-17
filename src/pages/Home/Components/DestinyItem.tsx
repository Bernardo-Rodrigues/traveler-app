import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

interface Destiny {
  name: string;
  localization: string;
  imageLink: string;
  score: number;
}

interface Props {
  destiny: Destiny;
  size: string;
}

export default function DestinyItem({ destiny, size }: Props) {
  const navigate = useNavigate();

  return (
    <ListItem
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        display: "flex",
        gap: "40px",
        padding: "2% 3%",
        marginBottom: size === "small" ? "10px" : "25px",
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt="Avatar"
          src={destiny.imageLink}
          sx={
            size === "small"
              ? { width: "75px", height: "75px" }
              : { width: "150px", height: "150px" }
          }
        />
      </ListItemAvatar>

      <ListItemText>
        <Typography
          variant={size === "small" ? "h5" : "h4"}
          sx={
            size === "small"
              ? { marginBottom: "10px", fontWeight: "bold" }
              : { marginBottom: "30px", fontWeight: "bold" }
          }
        >
          {destiny.name}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />{" "}
          {destiny.localization}
          <StarBorderOutlinedIcon
            sx={{ marginLeft: "25px", color: "#FF8344" }}
          />
          {destiny.score}
        </Typography>
      </ListItemText>

      <Button
        color="primary"
        variant="contained"
        startIcon={<SearchIcon />}
        onClick={() => navigate(`/destinies/${destiny.name}`)}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Explore this destiny
      </Button>
    </ListItem>
  );
}
