import { Typography, Box, Avatar } from "@mui/material";
import { useState } from "react";

interface Props {
  achievement: any;
}

export default function Achievement({ achievement }: Props) {
  const [flip, setFlip] = useState(false);
  const backSide = {
    ...styles.backSide,
    background: `url(${achievement.imageLink})`,
    backgroundSize: "cover",
  };

  return (
    <Box
      sx={styles.achievement}
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
    >
      <Box
        sx={
          flip
            ? { ...styles.inner, transform: "rotateY(180deg)" }
            : styles.inner
        }
      >
        <Box sx={styles.frontSide}>
          <Avatar
            sx={{ width: "150px", height: "150px" }}
            src="https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Brooch.jpg"
          />
        </Box>
        <Box sx={backSide}>
          <Typography fontWeight="bold" fontSize="15px" component="h2">
            {achievement.name}
          </Typography>
          <Typography fontWeight="bold" fontSize="12px">
            {achievement.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  achievement: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    perspective: "1000px",
  },
  inner: {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  },
  frontSide: {
    position: "absolute",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  backSide: {
    position: "absolute",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    color: "#000",
    transform: "rotateY(180deg)",
    gap: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: 2,
  },
};
