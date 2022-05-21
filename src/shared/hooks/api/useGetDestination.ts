import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";
import useHeaders from "../useHeaders";
import useContexts from "../useContexts";

const service = new DestinationsService();

export default function useGetDestination() {
  const headers = useHeaders();
  const contexts = useContexts();
  const { section } = contexts.section;
  const { data, loading, act, error } = useAsync(() =>
    service.getOne(section, headers)
  );

  const update = (name: string) => {
    act(name, headers);
  };

  return {
    destination: data,
    loadingDestination: loading,
    getDestination: act,
    getDestinationError: error,
    updateDestination: update,
  };
}
