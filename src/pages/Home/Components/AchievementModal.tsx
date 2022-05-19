import { Avatar, Modal, Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  backgroundColor: "#fff",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5%",
  borderRadius: "20%",
  p: 2,
};

interface Props {
  achievement: any;
}

export default function AchievementModal({ achievement }: Props) {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal open={open}>
        <Box sx={style}>
          <Avatar
            sx={{ width: "150px", height: "150px" }}
            src="https://hjjvsmpqvznxkydtrqzo.supabase.co/storage/v1/object/public/assets/Brooch.jpg"
          />
          <Typography fontWeight="bold" variant="h5" component="h2">
            {achievement.name}
          </Typography>
          <Typography variant="h6">{achievement.description}</Typography>
          <Button variant="contained" onClick={handleClose}>
            Receive achievement
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
