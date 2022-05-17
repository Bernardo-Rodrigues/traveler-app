import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";

const service = new DestiniesService();

export default function useAddFavorites() {
  const { error, loading, act } = useAsync(service.favorite, false);

  return {
    addFavoriteError: error,
    loadingAddFavorite: loading,
    addFavorite: act,
  };
}
