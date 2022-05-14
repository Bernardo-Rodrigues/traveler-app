import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../shared/components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import useContexts from "../../../shared/hooks/useContexts";

export default function LeftMenu() {
  const contexts = useContexts();
  const { logout } = contexts.user;

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "40px 40px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Logo size="small" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "100%",
          marginTop: "-60vh",
        }}
      >
        <Button
          startIcon={<HomeIcon />}
          sx={{
            textTransform: "none",
            height: "50px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
          variant="contained"
        >
          Dashboard
        </Button>
        <Button
          startIcon={<TravelExploreIcon />}
          sx={{
            textTransform: "none",
            height: "50px",
            fontSize: "17px",
            fontWeight: "bold",
          }}
          variant="contained"
        >
          Destinies
        </Button>
      </Box>
      <Button
        color="secondary"
        startIcon={<LogoutIcon />}
        onClick={logout}
        sx={{
          textTransform: "none",
          height: "50px",
          fontSize: "17px",
          fontWeight: "bold",
        }}
        variant="contained"
        fullWidth
      >
        Log Out
      </Button>
    </Box>
  );
}
