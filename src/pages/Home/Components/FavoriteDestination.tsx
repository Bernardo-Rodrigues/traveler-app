import { ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router";
import useContexts from "../../../shared/hooks/useContexts";

interface Props {
  destination: any;
}

export default function FavoritesDestination({ destination }: Props) {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { setSection } = contexts.section;
  const listItem = {
    ...styles.listItem,
    backgroundImage: `url(${destination.imageLink})`,
  };

  return (
    <ListItem
      sx={listItem}
      onClick={() => {
        setSection(destination.name);
        navigate(`/dashboard/destinations/${destination.name}`);
      }}
    >
      <Box sx={styles.overlay}>
        <Typography
          fontWeight="bold"
          sx={{ margin: "0 0 0 5px", fontSize: "15px" }}
        >
          {destination.name}
        </Typography>
        <Typography sx={styles.typography}>
          <LocationOnOutlinedIcon sx={{ width: "20px", color: "#FF8344" }} />{" "}
          {destination.country.name}
          <StarBorderOutlinedIcon
            sx={{ marginLeft: "5%", color: "#FF8344", width: "20px" }}
          />
          {destination.score.toFixed(2)}
        </Typography>
      </Box>
    </ListItem>
  );
}

const styles = {
  listItem: {
    position: "relative",
    minWidth: "23%",
    width: "250px",
    backgroundSize: "cover",
    borderRadius: "25px",
    border: "3px solid #2ED29B",
    cursor: "pointer",
  },
  overlay: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    padding: "5px",
    width: "70%",
    borderRadius: "10px",
    border: "3px solid #2ED29B",
    backgroundColor: "#fff",
  },
  typography: {
    display: "flex",
    gap: "3px",
    alignItems: "center",
    fontSize: "13px",
    flexWrap: "wrap",
  },
};
