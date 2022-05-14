import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useContexts from "../../shared/hooks/useContexts";
import DestiniesSection from "./Components/DestiniesSection";
import LeftMenu from "./Components/LeftMenu";
import DashboardSection from "./Components/DashboardSection";
import RightMenu from "./Components/RightMenu";

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

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <LeftMenu />
      {section === "dashboard" ? <DashboardSection /> : <DestiniesSection />}
      <RightMenu />
    </Box>
  );
}
