import {
  Avatar,
  CircularProgress,
  List,
  ListItemAvatar,
  ListItemButton,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useAvatars from "../../hooks/api/useAvatars";

interface Props {
  values: any;
  setValues: (value: React.SetStateAction<any>) => void;
}

export default function Avatars({ values, setValues }: Props) {
  const { avatars, loadingAvatars, listAvatarsError } = useAvatars();
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setValues({ ...values, avatarId: index + 1 });
  };

  if (listAvatarsError) {
    return <div>No avatars found, come back later!</div>;
  }

  if ((loadingAvatars && !avatars) || !avatars) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Typography sx={{ fontSize: "25px" }}>Choose your avatar</Typography>
      <List
        component="nav"
        aria-label="main mailbox folders"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {avatars.map((avatar: any, i: number) => (
          <ListItemButton
            id={`Avatar-${i}`}
            selected={selectedIndex === i}
            onClick={(event) => handleListItemClick(event, i)}
            key={i}
          >
            <ListItemAvatar>
              <Avatar alt="Avatar" src={avatar.imageLink} />
            </ListItemAvatar>
          </ListItemButton>
        ))}
      </List>
    </>
  );
}
