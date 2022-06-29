import { Box } from "@mui/system";
import { useEffect } from "react";
import { Outlet } from "react-router";
import useContexts from "../../shared/hooks/useContexts";
import LeftMenu from "./Components/LeftMenu";
import RightMenu from "./Components/RightMenu";
import AchievementModal from "./Components/AchievementModal";
import useReceiveAchievement from "../../shared/hooks/api/useReceiveAchievement";
import useHeaders from "../../shared/hooks/useHeaders";

export default function Home() {
  console.log("Home");
  const contexts = useContexts();
  const { achievements, receiveAchievements } = useReceiveAchievement();
  const { auth } = contexts.user;
  const { section } = contexts.section;
  const { haveAchievement, setHaveAchievement } = contexts.achievement;
  const headers = useHeaders();

  useEffect(() => {
    if (typeof haveAchievement === "number") {
      receiveAchievements(haveAchievement, headers);
      setHaveAchievement(null);
    }
    //eslint-disable-next-line
  }, [haveAchievement]);

  if (section.length === 0) return null;
  if (!auth?.token) return null;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <LeftMenu />
      <Outlet />
      {achievements &&
        achievements.map((achievement: any, i: number) => (
          <AchievementModal key={i} achievement={achievement} />
        ))}
      <RightMenu />
    </Box>
  );
}
