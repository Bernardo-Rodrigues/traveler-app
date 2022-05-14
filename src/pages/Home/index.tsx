import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useContexts from "../../shared/hooks/useContexts";
import LeftMenu from "./Components/LeftMenu";
import MainSection from "./Components/MainSection";
import RightMenu from "./Components/RightMenu";

export default function Home() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { auth, logout } = contexts.user;

  useEffect(() => {
    if (!auth) {
      navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <LeftMenu />
      <MainSection />
      <RightMenu />
    </Box>
  );
}
