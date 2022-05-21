import { Box, Typography } from "@mui/material";
import DestinationAssessments from "./DestinationAssessments";
import DestinationBooking from "./DestinationBooking";

interface Props {
  destination: any;
  onUpdate: () => void;
}

export default function DestinationFooter({ destination, onUpdate }: Props) {
  return (
    <Box sx={styles.footer}>
      <DestinationAssessments destination={destination} onUpdate={onUpdate} />
      <Typography>OR</Typography>
      <DestinationBooking destination={destination} />
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
