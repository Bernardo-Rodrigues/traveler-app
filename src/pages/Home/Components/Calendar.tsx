import { Box } from "@mui/system";
import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Box sx={{ marginLeft: "-15%" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
      </LocalizationProvider>
    </Box>
  );
}
