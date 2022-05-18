import { Box, Typography } from "@mui/material";
import DestinyAssessments from "./DestinyAssessments";
import DestinyBooking from "./DestinyBooking";

interface Props {
  destiny: any;
  onUpdate: () => void;
}

export default function DestinyFooter({ destiny, onUpdate }: Props) {
  return (
    <Box sx={styles.footer}>
      <DestinyAssessments destiny={destiny} onUpdate={onUpdate} />
      <Typography>OR</Typography>
      <DestinyBooking destiny={destiny} />
    </Box>
  );
}

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
    alignItems: "center",
  },
};
