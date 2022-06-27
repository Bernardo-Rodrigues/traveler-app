import ContinentsService from "../../services/ContinentsService";
import useAsync from "../useAsync";

const service = new ContinentsService();

export default function useListContinents() {
  const { data, loading, error } = useAsync(service.getAll);

  return {
    continents: data?.map((continent: any) => continent.name),
    loadingContinents: loading,
    listContinentsError: error,
  };
}
