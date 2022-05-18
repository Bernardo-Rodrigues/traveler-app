import { Button, TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fireAlert } from "../../../shared/utils/alerts";
import useContexts from "../../../shared/hooks/useContexts";
import EventIcon from "@mui/icons-material/Event";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useHeaders from "../../../shared/hooks/useHeaders";
import useAddTravel from "../../../shared/hooks/api/useAddTravel";
import dayjs from "dayjs";
import useListUpcomingTrips from "../../../shared/hooks/api/useListUpcomingTrips";

interface Props {
  destiny: any;
}

export default function DestinyBooking({ destiny }: Props) {
  const { addTravel, addTravelError, addTravelSuccess } = useAddTravel();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { setMessage } = contexts.alert;
  const { setUpdate } = contexts.schedule;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const headers = useHeaders();

  useEffect(() => {
    if (addTravelSuccess) {
      setUpdate(true);
      return setMessage({ type: "success", text: "The trip has been booked" });
    }
    //eslint-disable-next-line
  }, [addTravelSuccess]);

  useEffect(() => {
    if (addTravelError) {
      fireAlert(addTravelError.data);
      if (addTravelError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [addTravelError]);

  async function handleBooking(destinyId: number) {
    if (!startDate || !endDate)
      return setMessage({ type: "error", text: "Both dates must be informed" });
    if (dayjs(startDate).isAfter(endDate))
      return setMessage({ type: "error", text: "Dates are invalid" });

    await addTravel(destinyId, { startDate, endDate }, headers);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Initial date"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="Final date"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        startIcon={<EventIcon />}
        onClick={() => handleBooking(destiny.id)}
      >
        Book now
      </Button>
    </Box>
  );
}
