import useAsync from "../useAsync";
import AchievementsService from "../../services/AchievementsService";

const service = new AchievementsService();

export default function useReceiveAchievement() {
  const { data, error, loading, act } = useAsync(service.receive, false);

  return {
    receiveAchievementError: error,
    loadingReceiveAchievement: loading,
    receiveAchievement: act,
    achievement: data,
  };
}