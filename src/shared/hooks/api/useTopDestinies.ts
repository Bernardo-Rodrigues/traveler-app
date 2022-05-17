import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";
import useHeaders from "../useHeaders";

const service = new DestiniesService();

export default function useTopDestinies() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() => service.getTop(headers));

  return {
    topDestinies: data,
    loadingTopDestinies: loading,
    listTopDestinies: act,
    listingTopDestiniesError: error,
  };
}
