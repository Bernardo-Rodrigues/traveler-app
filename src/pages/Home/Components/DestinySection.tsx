import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useDestiny from "../../../shared/hooks/api/useDestiny";
import { fireAlert } from "../../../shared/utils/alerts";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import useContexts from "../../../shared/hooks/useContexts";

export default function DestinySection() {
  const { destiny, loadingDestiny, getDestinyError } = useDestiny();
  const navigate = useNavigate();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (getDestinyError) {
      fireAlert(getDestinyError.data);
      if (getDestinyError.status === 401) logout();
    }
  }, [getDestinyError]);

  if ((loadingDestiny && !destiny) || !destiny) {
    return (
      <Box
        sx={{
          flex: 3,
          background: "#F1FBF4",
          margin: "20px 0",
          padding: "0px 30px 30px",
          borderRadius: "50px",
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 3,
        background: "#F1FBF4",
        margin: "20px 0",
        padding: "30px 30px 30px",
        borderRadius: "50px",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ position: "relative", marginBottom: "50px" }}>
        <img alt="destiny" src={destiny.imageLink} style={styles.img} />
        <ArrowCircleLeftIcon
          onClick={() => navigate("/destinies")}
          sx={{
            position: "absolute",
            left: "20px",
            top: "30px",
            color: "#fff",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#fff",
            left: "20px",
            bottom: "-20px",
            padding: "10px",
            borderRadius: "10px",
            border: "3px solid #2ED29B",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ margin: "0 0 15px 5px" }}
          >
            {destiny.name}
          </Typography>
          <Typography
            sx={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />{" "}
            {destiny.localization}
            <StarBorderOutlinedIcon
              sx={{ marginLeft: "25px", color: "#FF8344" }}
            />
            4.8
          </Typography>
        </Box>
      </Box>
      <List>
        {destiny.descriptions.map((description: any, i: number) => (
          <ListItem
            key={i}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Typography variant="h5" fontWeight="bold">
              {description.type}
            </Typography>
            <Typography fontSize="15px" sx={{ color: "#666" }}>
              {description.text}
            </Typography>
          </ListItem>
        ))}
      </List>
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
};
