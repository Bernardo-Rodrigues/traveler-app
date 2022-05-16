import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

export default function RightMenu() {
  const contexts = useContexts();
  const { user } = contexts.user;
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Box sx={{ flex: 1, padding: "50px 10px 50px 0" }}>
      <Box
        sx={{
          paddingLeft: "25px",
          display: "flex",
          gap: "5%",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <Avatar
          alt="Avatar"
          src={user?.imageLink}
          sx={{ width: "60px", height: "60px" }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {user?.username}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "14px", color: "#73848C" }}
          >
            Traveler
          </Typography>
        </Box>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    </Box>
  );
}
