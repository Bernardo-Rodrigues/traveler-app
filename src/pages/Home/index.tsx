import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useContexts from "../../shared/hooks/useContexts";
import DestiniesSection from "./Components/DestiniesSection";
import LeftMenu from "./Components/LeftMenu";
import DashboardSection from "./Components/DashboardSection";
import RightMenu from "./Components/RightMenu";
import DestinySection from "./Components/DestinySection";

export default function Home() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { auth } = contexts.user;

  const { section } = contexts.section;

  useEffect(() => {
    if (!auth) {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);

  if (!auth) return null;
  if (section.length === 0) return null;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LeftMenu />
      {section === "dashboard" ? (
        <DashboardSection />
      ) : section === "destinies" ? (
        <DestiniesSection />
      ) : (
        <DestinySection />
      )}
      <RightMenu />
    </Box>
  );
}
