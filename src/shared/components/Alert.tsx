import { Alert as MUIAlert, Snackbar } from "@mui/material";
import useContexts from "../hooks/useContexts";

export {};

export default function Alert() {
  const contexts = useContexts();
  const { message, handleClose } = contexts.alert;

  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
      <MUIAlert
        onClose={handleClose}
        severity={message?.type || "error"}
        sx={{ width: "100%" }}
      >
        {message?.text}
      </MUIAlert>
    </Snackbar>
  );
}
