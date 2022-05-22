import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";
import useHeaders from "../useHeaders";
import useContexts from "../useContexts";

const service = new DestinationsService();

export default function useListTips() {
  const headers = useHeaders();
  const contexts = useContexts();
  const { currentTrip } = contexts.currentTrip;
  const { data, loading, act, error } = useAsync(() =>
    service.listTips(currentTrip.destinationId, headers)
  );

  return {
    tips: data,
    loadingTips: loading,
    listTips: act,
    listingTipsrror: error,
  };
}
