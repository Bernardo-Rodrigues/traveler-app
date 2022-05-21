import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";

const service = new DestinationsService();

export default function useAddFavorites() {
  const { error, loading, act } = useAsync(service.favorite, false);

  return {
    addFavoriteError: error,
    loadingAddFavorite: loading,
    addFavorite: act,
  };
}
