import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";

const service = new DestinationsService();

export default function useTopDestinations() {
  const { data, loading, act, error } = useAsync(service.getTop, false);

  return {
    topDestinations: data,
    loadingTopDestinations: loading,
    listTopDestinations: act,
    listingTopDestinationsError: error,
  };
}
