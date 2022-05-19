import useAsync from "../useAsync";
import TravelsService from "../../services/TravelsService";
import useHeaders from "../useHeaders";
import useContexts from "../useContexts";

const service = new TravelsService();

export default function useListTips() {
  const headers = useHeaders();
  const contexts = useContexts();
  const { currentTravel } = contexts.currentTravel;
  const { data, loading, act, error } = useAsync(() =>
    service.listTips(currentTravel.destinyId, headers)
  );

  return {
    tips: data,
    loadingTips: loading,
    listTips: act,
    listingTipsrror: error,
  };
}
