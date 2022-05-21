import { ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DateRangeIcon from "@mui/icons-material/DateRange";
import dayjs from "dayjs";
import { SmallAvatar } from "../../../shared/styles/themes";

interface Props {
  trip: any;
}

export default function Trip({ trip }: Props) {
  return (
    <ListItem sx={styles.listItem}>
      <SmallAvatar alt="Destination" src={trip.destination.imageLink} />
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
          {trip.destination.name}
        </Typography>
        <Typography sx={styles.typography}>
          <DateRangeIcon />
          {`${dayjs(trip.startDate).get("D")} ${dayjs(trip.startDate).format(
            "MMMM"
          )} 
                - ${dayjs(trip.endDate).get("D")} ${dayjs(trip.endDate).format(
            "MMMM"
          )}`}
        </Typography>
      </Box>
    </ListItem>
  );
}

const styles = {
  typography: {
    fontWeight: "bold",
    fontSize: "14px",
    color: "#73848C",
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  listItem: {
    padding: "10px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  },
};
