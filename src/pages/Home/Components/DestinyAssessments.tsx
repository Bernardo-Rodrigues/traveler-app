import { Button, Rating, Box } from "@mui/material";
import { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FavoriteButton from "./FavoriteButton";

interface Props {
  destiny: any;
  onUpdate: () => void;
}

export default function DestinyAssessments({ destiny, onUpdate }: Props) {
  const [rating, setRating] = useState<number | null>(0);

  return (
    <Box sx={styles.assessments}>
      <FavoriteButton destiny={destiny} onUpdate={onUpdate} />
      <Button variant="contained" startIcon={<AddTaskIcon />}>
        I know this destination
      </Button>

      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </Box>
  );
}

const styles = {
  assessments: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
};
