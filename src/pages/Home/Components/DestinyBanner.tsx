import { Typography, Box } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router";

interface Props {
  destiny: any;
}

export default function DestinyBanner({ destiny }: Props) {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: "relative", marginBottom: "50px" }}>
      <img alt="destiny" src={destiny.imageLink} style={styles.img} />
      <ArrowCircleLeftIcon
        onClick={() => navigate("/destinies")}
        sx={styles.arrow}
      />
      <Box sx={styles.overlay}>
        <Typography
          sx={{ margin: "0 0 5px 5px", fontWeight: "bold", fontSize: "25px" }}
        >
          {destiny.name}
        </Typography>
        <Typography sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
          <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />{" "}
          {destiny.localization}
          <StarBorderOutlinedIcon
            sx={{ marginLeft: "25px", color: "#FF8344" }}
          />
          {destiny.score.toFixed(2)}
        </Typography>
      </Box>
    </Box>
  );
}

const styles = {
  img: {
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    borderRadius: "10px",
  },
  arrow: {
    position: "absolute",
    left: "20px",
    top: "30px",
    color: "#fff",
    width: "40px",
    height: "40px",
    cursor: "pointer",
  },
  overlay: {
    position: "absolute",
    backgroundColor: "#fff",
    left: "20px",
    bottom: "-20px",
    padding: "10px",
    borderRadius: "10px",
    border: "3px solid #2ED29B",
  },
};
