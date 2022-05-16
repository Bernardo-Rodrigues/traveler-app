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

export default function DestinySection() {
  const { destiny, loadingDestiny, getDestinyError, updateDestiny } =
    useDestiny();
  const { addFavorite, addFavoriteError } = useAddFavorites();
  const { removeFavorite, removeFavoriteError } = useRemoveFavorites();
  const navigate = useNavigate();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const [initialDate, setInitialDate] = useState<Date | null>(null);
  const [finalDate, setFinalDate] = useState<Date | null>(null);
  const [rating, setRating] = useState<number | null>(0);
  const headers = useHeaders();

  useEffect(() => {
    if (getDestinyError) {
      fireAlert(getDestinyError.data);
      if (getDestinyError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [getDestinyError]);

  useEffect(() => {
    if (addFavoriteError) {
      fireAlert(addFavoriteError.data);
      if (addFavoriteError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [addFavoriteError]);

  useEffect(() => {
    if (removeFavoriteError) {
      fireAlert(removeFavoriteError.data);
      if (removeFavoriteError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [removeFavoriteError]);

  async function handleFavoriteButton(destinyId: number, destinyName: string) {
    await addFavorite(destinyId, headers);
    updateDestiny(destinyName);
  }

  async function handleUnfavoriteButton(
    destinyId: number,
    destinyName: string
  ) {
    await removeFavorite(destinyId, headers);
    updateDestiny(destinyName);
  }

  if ((loadingDestiny && !destiny) || !destiny) {
    return (
      <Box
        sx={{
          flex: 3,
          background: "#F1FBF4",
          margin: "20px 0",
          padding: "0px 30px 30px",
          borderRadius: "50px",
        }}
      >
        Loading...
      </Box>
    );
  }

  return (
    <Box
      sx={{
        flex: 3,
        background: "#F1FBF4",
        margin: "20px 0",
        padding: "30px 30px 30px",
        borderRadius: "50px",
        overflowY: "scroll",
      }}
    >
      <Box sx={{ position: "relative", marginBottom: "50px" }}>
        <img alt="destiny" src={destiny.imageLink} style={styles.img} />
        <ArrowCircleLeftIcon
          onClick={() => navigate("/destinies")}
          sx={{
            position: "absolute",
            left: "20px",
            top: "30px",
            color: "#fff",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#fff",
            left: "20px",
            bottom: "-20px",
            padding: "10px",
            borderRadius: "10px",
            border: "3px solid #2ED29B",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ margin: "0 0 15px 5px" }}
          >
            {destiny.name}
          </Typography>
          <Typography
            sx={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            <LocationOnOutlinedIcon sx={{ color: "#FF8344" }} />{" "}
            {destiny.localization}
            <StarBorderOutlinedIcon
              sx={{ marginLeft: "25px", color: "#FF8344" }}
            />
            4.8
          </Typography>
        </Box>
      </Box>
      <List>
        {destiny.descriptions.map((description: any, i: number) => (
          <ListItem
            key={i}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Typography variant="h5" fontWeight="bold">
              {description.type}
            </Typography>
            <Typography fontSize="15px" sx={{ color: "#666" }}>
              {description.text}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ marginBottom: "30px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Button
            fullWidth
            variant="contained"
            startIcon={
              destiny.favorited ? <BookmarkRemoveIcon /> : <BookmarkAddIcon />
            }
            onClick={
              destiny.favorited
                ? () => {
                    handleUnfavoriteButton(destiny.id, destiny.name);
                  }
                : () => {
                    handleFavoriteButton(destiny.id, destiny.name);
                  }
            }
          >
            {destiny.favorited ? "Remove from favorites" : "Add to favorites"}
          </Button>
          <Button variant="contained" startIcon={<AddTaskIcon />}>
            I know this destination
          </Button>

          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Box>
        <Typography>OR</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Initial date"
              value={initialDate}
              onChange={(newValue) => {
                setInitialDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Final date"
              value={finalDate}
              onChange={(newValue) => {
                setFinalDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" startIcon={<EventIcon />}>
            Book now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  img: {
    width: "100%",
    height: "250px",
    backgroundSize: "cover",
    borderRadius: "10px",
  },
};
