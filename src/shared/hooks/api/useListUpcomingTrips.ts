import TravelsService from "../../services/TravelsService";
import useAsync from "../useAsync";

const service = new TravelsService();

export default function useListUpcomingTrips() {
  const { data, loading, act, error } = useAsync(service.listUpcomingTrips);

  return {
    trips: data,
    loadingTrips: loading,
    listTrips: act,
    listingTripsError: error,
  };
}
