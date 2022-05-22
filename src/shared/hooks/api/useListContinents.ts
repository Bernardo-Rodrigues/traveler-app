import useAsync from "../useAsync";
import ContinentsService from "../../services/ContinentsService";
import useHeaders from "../useHeaders";

const service = new ContinentsService();

export default function useListContinents() {
  const headers = useHeaders();
  const { data, loading, error } = useAsync(() => service.getAll(headers));

  return {
    continents: data?.map((continent: any) => continent.name),
    loadingContinents: loading,
    listContinentsError: error,
  };
}
