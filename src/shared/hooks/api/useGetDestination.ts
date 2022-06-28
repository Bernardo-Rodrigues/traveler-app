import DestinationsService from "../../services/DestinationsService";
import useContexts from "../useContexts";
import useAsync from "../useAsync";

const service = new DestinationsService();

export default function useGetDestination() {
  const contexts = useContexts();
  const { section } = contexts.section;

  const { data, loading, act, error } = useAsync((...args: any[]) =>
    service.getOne(section, ...args)
  );

  return {
    destination: data,
    loadingDestination: loading,
    getDestination: act,
    getDestinationError: error,
  };
}
