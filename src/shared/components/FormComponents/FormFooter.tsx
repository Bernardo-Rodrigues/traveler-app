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
          {type === "register" ? "Já possuo cadastro" : "Não possuo cadastro"}
        </Link>
      </Box>
      <Button type="submit" variant="contained" sx={{ width: "116px" }}>
        {type === "register" ? "CADASTRAR" : "ENTRAR"}
      </Button>
    </Box>
  );
}
