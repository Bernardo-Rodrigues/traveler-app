import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";
import useHeaders from "../useHeaders";

const service = new DestinationsService();

export default function useTopDestinations() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() => service.getTop(headers));

  return {
    topDestinations: data,
    loadingTopDestinations: loading,
    listTopDestinations: act,
    listingTopDestinationsError: error,
  };
}
