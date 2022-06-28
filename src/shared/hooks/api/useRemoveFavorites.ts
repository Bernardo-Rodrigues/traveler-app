import DestinationsService from "../../services/DestinationsService";
import useAsync from "../useAsync";

const service = new DestinationsService();

export default function useRemoveFavorites() {
  const { error, loading, act } = useAsync(service.unfavorite, false);

  return {
    removeFavoriteError: error,
    loadingRemoveFavorite: loading,
    removeFavorite: act,
  };
}
