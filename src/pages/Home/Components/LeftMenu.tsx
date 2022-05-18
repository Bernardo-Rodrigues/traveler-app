import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../shared/components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import useContexts from "../../../shared/hooks/useContexts";
import { useNavigate } from "react-router";
import { LeftMenuButton } from "../../../shared/styles/themes";

export default function LeftMenu() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { logout } = contexts.user;
  const { section } = contexts.section;

  return (
    <Box sx={styles.leftMenu}>
      <Logo size="small" />
      <Box sx={styles.menuButtons}>
        <LeftMenuButton
          startIcon={<HomeIcon />}
          color={section === "dashboard" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </LeftMenuButton>
        <LeftMenuButton
          startIcon={<TravelExploreIcon />}
          color={section === "destinies" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => navigate("/destinies")}
        >
          Destinies
        </LeftMenuButton>
      </Box>
      <LeftMenuButton
        color="secondary"
        startIcon={<LogoutIcon />}
        onClick={logout}
        variant="contained"
        fullWidth
      >
        Log Out
      </LeftMenuButton>
    </Box>
  );
}

const styles = {
  leftMenu: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    marginTop: "-60vh",
  },
};
