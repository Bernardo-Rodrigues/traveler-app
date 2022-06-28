import DestinationsService from "../../services/DestinationsService";
import useAsync from "../useAsync";

const service = new DestinationsService();

export default function useListFavorites() {
  const { data, loading, act, error } = useAsync(service.getAllFavorites);

  return {
    favorites: data,
    loadingFavorites: loading,
    listFavorites: act,
    listingFavoritesrror: error,
  };
}
