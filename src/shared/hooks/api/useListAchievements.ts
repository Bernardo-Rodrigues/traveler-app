import useAsync from "../useAsync";
import AchievementsService from "../../services/AchievementsService";
import useHeaders from "../useHeaders";

const service = new AchievementsService();

export default function useAchievements() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() => service.list(headers));

  return {
    achievements: data,
    loadingAchievements: loading,
    listAchievements: act,
    listingAchievementsError: error,
  };
}
