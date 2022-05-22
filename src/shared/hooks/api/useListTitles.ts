import useAsync from "../useAsync";
import TitlesService from "../../services/TitlesService";
import useContexts from "../useContexts";
import useHeaders from "../useHeaders";

const service = new TitlesService();

export default function useListTitles() {
  const contexts = useContexts();
  const { user } = contexts.user;
  const headers = useHeaders();
  const { data, loading, error } = useAsync(() =>
    service.getAll(user?.username, headers)
  );

  return {
    titles: data?.map((title: any) => title.text),
    loadingTitles: loading,
    listTitlesError: error,
  };
}
