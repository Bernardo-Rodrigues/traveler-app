import { Box } from "@mui/system";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useContexts from "../../shared/hooks/useContexts";
import DestinationsSection from "./Components/DestinationsSection";
import LeftMenu from "./Components/LeftMenu";
import DashboardSection from "./Components/DashboardSection";
import RightMenu from "./Components/RightMenu";
import DestinationSection from "./Components/DestinationSection";
import AchievementModal from "./Components/AchievementModal";
import useReceiveAchievement from "../../shared/hooks/api/useReceiveAchievement";
import useHeaders from "../../shared/hooks/useHeaders";
import AchievementsSection from "./Components/AchievementsSection";

export default function Home() {
  const navigate = useNavigate();
  const contexts = useContexts();
  const { achievements, receiveAchievements } = useReceiveAchievement();
  const { auth } = contexts.user;
  const { section } = contexts.section;
  const { haveAchievement, setHaveAchievement } = contexts.achievement;
  const headers = useHeaders();

  useEffect(() => {
    if (!auth) {
      return navigate("/sign-in");
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (typeof haveAchievement === "number") {
      receiveAchievements(haveAchievement, headers);
      setHaveAchievement(null);
    }
    //eslint-disable-next-line
  }, [haveAchievement]);

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
      ) : section === "destinations" ? (
        <DestinationsSection />
      ) : section === "achievements" ? (
        <AchievementsSection />
      ) : (
        section !== "sign-up" && <DestinationSection />
      )}
      {achievements &&
        achievements.map((achievement: any, i: number) => (
          <AchievementModal key={i} achievement={achievement} />
        ))}
      <RightMenu />
    </Box>
  );
}
