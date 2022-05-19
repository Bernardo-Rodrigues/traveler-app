import { Avatar, Typography, Box } from "@mui/material";
import useContexts from "../../../shared/hooks/useContexts";

interface Props {
  tip?: any;
  index: number;
  value: number;
  first: boolean;
}

export default function TabPanel({ value, index, tip, first }: Props) {
  const contexts = useContexts();
  const { currentTravel } = contexts.currentTravel;

  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box
          sx={
            first ? { ...styles.tapPanel, marginTop: "1.5%" } : styles.tapPanel
          }
        >
          <Avatar
            src={
              first
                ? "https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Trip.jpg"
                : "https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/SignPost.png"
            }
            sx={first ? styles.bigAvatar : styles.smallAvatar}
          />
          <Typography fontWeight="bold" textAlign="center">
            {first
              ? `Looks like you're on a trip to ${currentTravel.destiny.name}, are you up for some tips ?`
              : tip.description}
          </Typography>
          <Avatar
            src="https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/destinies/Machu-Picchu.jpg"
            sx={{ width: "150px", height: "150px" }}
          />
        </Box>
      )}
    </div>
  );
}

const styles = {
  tapPanel: {
    display: "flex",
    alignItems: "center",
    gap: "5%",
    marginTop: "4%",
    p: 3,
  },
  smallAvatar: { width: "150px", height: "150px" },
  bigAvatar: { width: "200px", height: "200px" },
};
