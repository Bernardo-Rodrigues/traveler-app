import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";
import useHeaders from "../useHeaders";

const service = new DestiniesService();

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
