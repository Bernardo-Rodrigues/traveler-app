import useAsync from "../useAsync";
import TravelsService from "../../services/TravelsService";
import useHeaders from "../useHeaders";

const service = new TravelsService();

export default function useListUpcomingTrips() {
  const headers = useHeaders();
  const { data, loading, act, error } = useAsync(() =>
    service.listUpcomingTrips(headers)
  );

  return {
    trips: data,
    loadingTrips: loading,
    listTrips: act,
    listingTripsError: error,
  };
}
