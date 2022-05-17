import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";
import useHeaders from "../useHeaders";
import useContexts from "../useContexts";

const service = new DestiniesService();

export default function useDestiny() {
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
    destiny: data,
    loadingDestiny: loading,
    getDestiny: act,
    getDestinyError: error,
    updateDestiny: update,
  };
}
