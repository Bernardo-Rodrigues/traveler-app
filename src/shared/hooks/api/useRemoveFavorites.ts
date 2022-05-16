import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";

const service = new DestiniesService();

export default function useRemoveFavorites() {
  const { error, loading, act } = useAsync(service.unfavorite, false);

  return {
    removeFavoriteError: error,
    loadingRemoveFavorite: loading,
    removeFavorite: act,
  };
}
