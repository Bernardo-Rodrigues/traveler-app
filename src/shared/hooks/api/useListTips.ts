import DestinationsService from "../../services/DestinationsService";
import useAsync from "../useAsync";

const service = new DestinationsService();

export default function useListTips(destinationId: number) {
  const { data, loading, act, error } = useAsync((...args: any) =>
    service.listTips(destinationId, ...args)
  );

  return {
    tips: data,
    loadingTips: loading,
    listTips: act,
    listingTipsrror: error,
  };
}
