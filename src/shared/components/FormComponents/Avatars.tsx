import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import useAvatars from "../../hooks/api/useAvatars";
import Form from "../../interfaces/Form";

interface Props {
  values: Form;
  setValues: (value: React.SetStateAction<Form>) => void;
}

export default function Avatars({ values, setValues }: Props) {
  const { avatars, loadingAvatars } = useAvatars();
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setValues({ ...values, avatarId: index + 1 });
  };

  if ((loadingAvatars && !avatars) || !avatars) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Typography sx={{ fontSize: "25px" }}>Escolha seu avatar</Typography>
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
