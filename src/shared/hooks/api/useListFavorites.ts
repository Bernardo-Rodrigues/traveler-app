import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";
import useHeaders from "../useHeaders";

const service = new DestinationsService();

export default function useListFavorites() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() =>
    service.getAllFavorites(headers)
  );

  return {
    favorites: data,
    loadingFavorites: loading,
    listFavorites: act,
    listingFavoritesrror: error,
  };
}
