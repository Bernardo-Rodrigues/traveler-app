import { Button, TextField, Box } from "@mui/material";
import { useEffect, useState } from "react";
import useContexts from "../../../shared/hooks/useContexts";
import EventIcon from "@mui/icons-material/Event";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useAddTravel from "../../../shared/hooks/api/useAddTravel";
import ApiCalendar from "react-google-calendar-api";
import dayjs from "dayjs";
import { useAuth } from "@clerk/clerk-react";

interface Props {
  destination: any;
}

const config = {
  clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID as string,
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

export default function DestinationBooking({ destination }: Props) {
  const { addTravel, addTravelError, addTravelSuccess } = useAddTravel();
  const contexts = useContexts();
  const clerkAuth = useAuth();
  const { setMessage } = contexts.alert;
  const { setUpdate } = contexts.schedule;
  const { section } = contexts.section;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    if (addTravelSuccess) {
      setUpdate(true);
      return setMessage({ type: "success", text: "The trip has been booked" });
    }
    //eslint-disable-next-line
  }, [addTravelSuccess]);

  useEffect(() => {
    if (addTravelError) {
      setMessage(addTravelError.data);
      if (addTravelError.status === 401) clerkAuth.signOut();
    }
    //eslint-disable-next-line
  }, [addTravelError]);

  async function handleBooking(destinationId: number) {
    if (!startDate || !endDate)
      return setMessage({ type: "error", text: "Both dates must be informed" });
    if (dayjs(startDate).isAfter(endDate))
      return setMessage({ type: "error", text: "Dates are invalid" });

    await addTravel({ destinationId, startDate, endDate });

    const event = {
      summary: `Trip to ${section}`,
      start: {
        dateTime: dayjs(startDate).format(),
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: dayjs(endDate).format(),
        timeZone: "America/Sao_Paulo",
      },
    };

    apiCalendar
      .createEvent(event)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Button
          variant="contained"
          onClick={() => apiCalendar.handleAuthClick()}
        >
          Login with google calendar
        </Button>
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
        onClick={() => handleBooking(destination.id)}
      >
        Book now
      </Button>
    </Box>
  );
}
