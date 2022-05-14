import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";

const service = new DestiniesService();

export default function useDestinies() {
  const { data, loading, act } = useAsync(service.getAll, true, true);

  return {
    destinies: data,
    loadingDestinies: loading,
    listDestinies: act,
  };
}
