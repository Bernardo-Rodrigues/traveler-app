import DestinationsService from "../../services/DestinationsService";
import useAsync from "../useAsync";

const service = new DestinationsService();

export default function useTopDestinations() {
  const { data, loading, act, error } = useAsync(service.getTop);

  return {
    topDestinations: data,
    loadingTopDestinations: loading,
    listTopDestinations: act,
    listingTopDestinationsError: error,
  };
}
