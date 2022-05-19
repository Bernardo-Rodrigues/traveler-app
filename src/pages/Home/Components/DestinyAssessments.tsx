import { Button, Rating, Box, Typography } from "@mui/material";
import { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FavoriteButton from "./FavoriteButton";
import useReceiveAchievement from "../../../shared/hooks/api/useReceiveAchievement";
import useHeaders from "../../../shared/hooks/useHeaders";
import AchievementModal from "./AchievementModal";

interface Props {
  destiny: any;
  onUpdate: () => void;
}

export default function DestinyAssessments({ destiny, onUpdate }: Props) {
  const [rating, setRating] = useState<number | null>(0);
  const { achievement, receiveAchievement } = useReceiveAchievement();
  const headers = useHeaders();

  async function handleNewAchievement() {
    await receiveAchievement(destiny.id, headers);
    onUpdate();
  }

  return (
    <Box sx={styles.assessments}>
      {achievement && <AchievementModal achievement={achievement} />}
      <FavoriteButton destiny={destiny} onUpdate={onUpdate} />
      {!destiny.visited ? (
        <Button
          onClick={handleNewAchievement}
          variant="contained"
          startIcon={<AddTaskIcon />}
        >
          I know this destination
        </Button>
      ) : (
        <Box
          sx={{
            border: "3px solid #2ED29B",
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography fontWeight="bold" mb={2}>
            Rate your experience in this destination
          </Typography>
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
      )}
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
