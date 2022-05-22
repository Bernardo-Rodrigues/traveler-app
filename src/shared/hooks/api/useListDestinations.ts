import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";
import useHeaders from "../useHeaders";

const service = new DestinationsService();

export default function useListDestinations() {
  const { data, loading, act, error } = useAsync(service.getAll, false);

  return {
    destinations: data,
    loadingDestinations: loading,
    listDestinations: act,
    listingDestinationsError: error,
  };
}
