import useAsync from "../useAsync";
import AchiecementsService from "../../services/AchiecementsService";

const service = new AchiecementsService();

export default function useReceiveAchievement() {
  const { data, error, loading, act } = useAsync(service.receive, false);

  return {
    receiveAchievementError: error,
    loadingReceiveAchievement: loading,
    receiveAchievement: act,
    achievement: data,
  };
}
