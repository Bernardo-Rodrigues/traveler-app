import { Button, Rating, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import FavoriteButton from "./FavoriteButton";
import useReceiveAchievement from "../../../shared/hooks/api/useReceiveAchievement";
import useHeaders from "../../../shared/hooks/useHeaders";
import AchievementModal from "./AchievementModal";
import useAddReview from "../../../shared/hooks/api/useMakeReview";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";

interface Props {
  destination: any;
  onUpdate: () => void;
}

export default function DestinationAssessments({
  destination,
  onUpdate,
}: Props) {
  const [rating, setRating] = useState<number | null>(destination.personalRate);
  const { achievements, receiveAchievements } = useReceiveAchievement();
  const { addReview, addReviewError } = useAddReview();
  const headers = useHeaders();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { setMessage } = contexts.alert;

  async function handleNewAchievement() {
    await receiveAchievements(destination.id, headers);
    onUpdate();
  }

  async function handleRating(newValue: number | null) {
    setRating(newValue);
    await addReview({ note: newValue }, destination.id, headers);
    setMessage({ type: "success", text: "The review has been sent" });
    onUpdate();
  }

  useEffect(() => {
    if (addReviewError) {
      fireAlert(addReviewError.data);
      if (addReviewError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [addReviewError]);

  return (
    <Box sx={styles.assessments}>
      {achievements &&
        achievements.map((achievement: any, i: number) => (
          <AchievementModal key={i} achievement={achievement} />
        ))}
      <FavoriteButton destination={destination} onUpdate={onUpdate} />
      {!destination.visited ? (
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
              handleRating(newValue);
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
