import AchievementsService from "../../services/AchievementsService";
import useAsync from "../useAsync";

const service = new AchievementsService();

export default function useAchievements() {
  const { data, loading, act, error } = useAsync(service.list);

  return {
    achievements: data,
    loadingAchievements: loading,
    listAchievements: act,
    listingAchievementsError: error,
  };
}
