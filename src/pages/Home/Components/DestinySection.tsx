import {
  Button,
  List,
  ListItem,
  Typography,
  TextField,
  Divider,
  Rating,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useDestiny from "../../../shared/hooks/api/useDestiny";
import { fireAlert } from "../../../shared/utils/alerts";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import useContexts from "../../../shared/hooks/useContexts";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import EventIcon from "@mui/icons-material/Event";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddTaskIcon from "@mui/icons-material/AddTask";
import useAddFavorites from "../../../shared/hooks/api/useAddFavorites";
import useHeaders from "../../../shared/hooks/useHeaders";
import useRemoveFavorites from "../../../shared/hooks/api/useRemoveFavorites";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import useAddTravel from "../../../shared/hooks/api/useAddTravel";
import dayjs from "dayjs";
import useListUpcomingTrips from "../../../shared/hooks/api/useListUpcomingTrips";
import DestinyBanner from "./DestinyBanner";
import DestinyDescriptions from "./DestinyDescriptions";
import DestinyFooter from "./DestinyFooter";

export default function DestinySection() {
  const { destiny, loadingDestiny, getDestinyError, updateDestiny } =
    useDestiny();
  const contexts = useContexts();
  const { logout } = contexts.user;

  useEffect(() => {
    if (getDestinyError) {
      fireAlert(getDestinyError.data);
      if (getDestinyError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [getDestinyError]);

  if ((loadingDestiny && !destiny) || !destiny) {
    return <Box sx={styles.destiny}>Loading...</Box>;
  }

  return (
    <Box sx={styles.destiny}>
      <DestinyBanner destiny={destiny} />
      <DestinyDescriptions descriptions={destiny.descriptions} />
      <DestinyFooter
        destiny={destiny}
        onUpdate={() => updateDestiny(destiny.name)}
      />
    </Box>
  );
}

const styles = {
  destiny: {
    width: "60%",
    background: "#F1FBF4",
    margin: "20px 0",
    padding: "30px 30px 30px",
    borderRadius: "50px",
    overflowY: "scroll",
  },
};
