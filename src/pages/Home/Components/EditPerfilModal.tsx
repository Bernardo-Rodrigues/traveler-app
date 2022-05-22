import {
  Modal,
  Box,
  Button,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  Avatars,
  Form,
  NameInput,
} from "../../../shared/components/FormComponents";
import useEditUser from "../../../shared/hooks/api/useEditUser";
import useListTitles from "../../../shared/hooks/api/useListTitles";
import useContexts from "../../../shared/hooks/useContexts";
import useHeaders from "../../../shared/hooks/useHeaders";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "600px",
  backgroundColor: "#fff",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5%",
  borderRadius: "20%",
  p: "4%",
};

interface Props {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EditPerfilModal({ edit, setEdit }: Props) {
  const { titles, listTitlesError } = useListTitles();
  const { success, editUser, errorEditingUser } = useEditUser();
  const headers = useHeaders();
  const contexts = useContexts();
  const { setMessage } = contexts.alert;
  const { logout, setUser } = contexts.user;
  const [values, setValues] = useState({
    username: "",
    avatarId: "",
    title: "",
  });

  useEffect(() => {
    if (listTitlesError) {
      setMessage({ type: "error", text: listTitlesError.data });
      if (listTitlesError.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [listTitlesError]);

  useEffect(() => {
    if (errorEditingUser) {
      setEdit(false);
      setMessage({ type: "error", text: errorEditingUser.data });
      if (errorEditingUser.status === 401) logout();
    }
    //eslint-disable-next-line
  }, [errorEditingUser]);

  useEffect(() => {
    if (success) {
      console.log(success);
      setUser(success);
      setEdit(false);
    }
    //eslint-disable-next-line
  }, [success]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await editUser(values, headers);
  };

  return (
    <Modal open={edit} onClose={() => setEdit(false)}>
      <Box sx={style}>
        <Typography fontWeight="bold" variant="h4">
          Edit your perfil
        </Typography>
        <Form handleSubmit={handleSubmit}>
          <Avatars values={values} setValues={setValues} />
          <NameInput values={values} setValues={setValues} />
          <Autocomplete
            options={titles}
            renderInput={(params) => <TextField {...params} label="Titles" />}
            onChange={(event: any, newValue: string | null) => {
              setValues({ ...values, title: newValue as string });
            }}
          />
          <Button type="submit" fullWidth variant="contained">
            Save
          </Button>
        </Form>
      </Box>
    </Modal>
  );
}
