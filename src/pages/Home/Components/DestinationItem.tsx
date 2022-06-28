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
import useContexts from "../../../shared/hooks/useContexts";

interface Destination {
  name: string;
  country: any;
  imageLink: string;
  score: number;
}

interface Props {
  destination: Destination;
  size: string;
}

export default function DestinationItem({ destination, size }: Props) {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { setSection } = contexts.section;
  const listItem = {
    ...styles.listItem,
    marginBottom: size === "small" ? "10px" : "25px",
  };

  return (
    <ListItem sx={listItem}>
      <ListItemAvatar>
        <Avatar
          alt="Avatar"
          src={destination.imageLink}
          sx={size === "small" ? styles.smallAvatar : styles.bigAvatar}
        />
      </ListItemAvatar>

      <ListItemText>
        <Typography
          variant={size === "small" ? "h5" : "h4"}
          fontWeight="bold"
          sx={size === "small" ? styles.smallTypography : styles.bigTypography}
        >
          {destination.name}
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />
          {destination.country.name}
          <StarBorderOutlinedIcon sx={styles.starIcon} />
          {destination.score.toFixed(2)}
        </Typography>
      </ListItemText>

      <Button
        variant="contained"
        startIcon={<SearchIcon />}
        onClick={() => {
          setSection(destination.name);
          navigate(`/dashboard/destinations/${destination.name}`);
        }}
        sx={styles.button}
      >
        Explore this destination
      </Button>
    </ListItem>
  );
}

const styles = {
  listItem: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    display: "flex",
    gap: "40px",
    padding: "2% 3%",
  },
  smallAvatar: { width: "75px", height: "75px" },
  bigAvatar: { width: "150px", height: "150px" },
  smallTypography: { marginBottom: "10px" },
  bigTypography: { marginBottom: "30px" },
  button: {
    textTransform: "none",
    fontWeight: "bold",
  },
  starIcon: { marginLeft: "25px", color: "#FF8344" },
};
