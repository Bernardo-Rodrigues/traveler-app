import AchievementsService from "../../services/AchievementsService";
import useAsync from "../useAsync";

const service = new AchievementsService();

export default function useReceiveAchievement() {
  const { data, error, loading, act } = useAsync(service.receive, false);

  return {
    receiveAchievementsError: error,
    loadingReceiveAchievements: loading,
    receiveAchievements: act,
    achievements: data,
  };
}
