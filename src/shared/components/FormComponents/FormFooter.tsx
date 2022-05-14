import { Box, Button, Link } from "@mui/material";

interface Props {
  type: string;
}

export default function FormFooter({ type }: Props) {
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
          href={type === "register" ? "/sign-in" : "sign-up"}
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
