import { Avatar, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useContexts from "../../../shared/hooks/useContexts";
import { LocalizationProvider, CalendarPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useEffect, useState } from "react";
import useListUpcomingTrips from "../../../shared/hooks/api/useListUpcomingTrips";
import { fireAlert } from "../../../shared/utils/alerts";
import DateRangeIcon from "@mui/icons-material/DateRange";
import dayjs from "dayjs";

export default function RightMenu() {
  const contexts = useContexts();
  const { user, logout } = contexts.user;
  const [date, setDate] = useState<Date | null>(new Date());
  const { trips, listingTripsError, loadingTrips } = useListUpcomingTrips();

  useEffect(() => {
    if (listingTripsError) {
      fireAlert(listingTripsError.data);
      if (listingTripsError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listingTripsError]);

  if ((loadingTrips && !trips) || !trips) {
    return <div>loading...</div>;
  }

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
      <Box
        sx={{
          margin: "-20px 0 0 10px",
          overflowY: "scroll",
          height: "50%",
          border: "2px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            position: "sticky",
            top: "0px",
            zIndex: "1",
            background: "#fff",
            padding: "10px 0",
            borderBottom: "1px solid #ccc",
          }}
        >
          My Schedule
        </Typography>
        <List sx={{ padding: "0 20px" }}>
          {trips.map((trip: any, i: number) => (
            <ListItem
              key={i}
              sx={{
                padding: "10px",
                marginBottom: "15px",
                display: "flex",
                gap: "5%",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            >
              <Avatar
                alt="Destination"
                src={trip.destiny.imageLink}
                sx={{ width: "75px", height: "75px" }}
              />
              <Box>
                <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                  {trip.destiny.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#73848C",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  <DateRangeIcon />
                  {`${dayjs(trip.startDate).get("D")} ${dayjs(
                    trip.startDate
                  ).format("MMMM")} - ${dayjs(trip.endDate).get("D")} ${dayjs(
                    trip.endDate
                  ).format("MMMM")}`}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
