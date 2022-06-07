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
import ApiCalendar from "react-google-calendar-api";
import dayjs from "dayjs";

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

  async function handleBooking(destinationId: number) {
    if (!startDate || !endDate)
      return setMessage({ type: "error", text: "Both dates must be informed" });
    if (dayjs(startDate).isAfter(endDate))
      return setMessage({ type: "error", text: "Dates are invalid" });

    await addTravel({ destinationId, startDate, endDate }, headers);
  }

  function handleCalendarLoginOrLogout(name: string) {
    if (name === "login") {
      apiCalendar.handleAuthClick();
      console.log("logged in");
    } else if (name === "logout") {
      apiCalendar.handleSignoutClick();
      console.log("logged out");
    }
  }

  function listUpcomingEvents() {
    if (apiCalendar.sign)
      apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
        console.log("upcomsing events", result.items);
      });
  }

  function listAllEvents() {
    if (apiCalendar.sign)
      apiCalendar
        .listEvents({
          maxResults: 10,
        })
        .then(({ result }: any) => {
          console.log(result.items);
        });
  }

  function updateEvent() {
    const eId = "fuu9e5iegq5fn1t24a6cgi0u1g";
    const event = {
      summary: "changed name to meet30june for demo purposes",
    };
    apiCalendar.updateEvent(event, eId).then((res: any) => {
      console.log(res);
    });

    apiCalendar.getEvent(eId).then(console.log);
  }

  function deleteEvent() {
    const eId = "fuu9e5iegq5fn1t24a6cgi0u1g";
    apiCalendar.deleteEvent(eId).then((res: any) => {
      console.log(res);
    });

    apiCalendar.getEvent(eId).then(console.log);
  }

  function createEventFromNow() {
    const eventFromNow = {
      summary: "Poc Dev From Now",
      time: 180,
    };

    apiCalendar
      .createEventFromNow(eventFromNow)
      .then((response: any) => console.log(response))
      .catch((err: any) => console.log(err));
  }

  function createEvent() {
    const event = {
      summary: "new event created",
      description: "demo of create event function",
      start: {
        dateTime: dayjs().format(),
        timeZone: "America/Sao_Paulo",
      },
      end: {
        dateTime: dayjs().add(3, "hours").format(),
        timeZone: "America/Sao_Paulo",
      },
    };

    apiCalendar
      .createEvent(event)
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
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
        onClick={() => handleBooking(destination.id)}
      >
        Book now
      </Button>
      <Button
        variant="contained"
        onClick={() => handleCalendarLoginOrLogout("login")}
      >
        Login
      </Button>
      <Button
        variant="contained"
        onClick={() => handleCalendarLoginOrLogout("logout")}
      >
        Logout
      </Button>
      <Button variant="contained" onClick={listUpcomingEvents}>
        list upcoming events
      </Button>
      <Button variant="contained" onClick={listAllEvents}>
        list all events
      </Button>
      <Button variant="contained" onClick={updateEvent}>
        update an event
      </Button>
      <Button variant="contained" onClick={createEventFromNow}>
        create an event from now
      </Button>
      <Button variant="contained" onClick={createEvent}>
        create an event
      </Button>
      <Button variant="contained" onClick={deleteEvent}>
        delete an event
      </Button>
    </Box>
  );
}
