import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";
import useHeaders from "../useHeaders";

const service = new DestiniesService();

export default function useDestinies() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() => service.getAll(headers));

  return {
    destinies: data,
    loadingDestinies: loading,
    listDestinies: act,
    listingDestiniesError: error,
  };
}
