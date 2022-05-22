import { Box, Button, Link } from "@mui/material";
import { useNavigate } from "react-router";
import useContexts from "../../hooks/useContexts";

interface Props {
  type: string;
}

export default function FormFooter({ type }: Props) {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { setSection } = contexts.section;

  function navigateToSignIn() {
    setSection("sign-in");
    navigate("/sign-in");
  }

  function navigateToSignUp() {
    setSection("sign-up");
    navigate("/sign-up");
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        heigth: "36px",
        marginTop: "15px",
      }}
    >
      <Box>
        <Link
          underline="none"
          onClick={type === "register" ? navigateToSignIn : navigateToSignUp}
          variant="body2"
        >
          {type === "register"
            ? "Already have an account"
            : "Don't have an account"}
        </Link>
      </Box>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        sx={{ width: "116px" }}
      >
        {type === "register" ? "SIGN UP" : "SIGN IN"}
      </Button>
    </Box>
  );
}
