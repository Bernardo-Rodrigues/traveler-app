import { Box } from "@mui/system";
import Logo from "../../../shared/components/Logo";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LogoutIcon from "@mui/icons-material/Logout";
import useContexts from "../../../shared/hooks/useContexts";
import { useNavigate } from "react-router";
import { LeftMenuButton } from "../../../shared/styles/themes";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { useAuth } from "@clerk/clerk-react";

export default function LeftMenu() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { section } = contexts.section;
  const clerkAuth = useAuth();

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
          color={section === "destinations" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => navigate("/dashboard/destinations")}
        >
          Destinations
        </LeftMenuButton>
        <LeftMenuButton
          startIcon={<WorkspacePremiumIcon />}
          color={section === "achievements" ? "primary" : "secondary"}
          variant="contained"
          onClick={() => navigate("/dashboard/achievements")}
        >
          Achievements
        </LeftMenuButton>
      </Box>
      <LeftMenuButton
        color="secondary"
        startIcon={<LogoutIcon />}
        onClick={() => clerkAuth.signOut()}
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
    minWidth: "20%",
    display: "flex",
    flexDirection: "column",
    padding: "40px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButtons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
    marginTop: "-48vh",
  },
};
