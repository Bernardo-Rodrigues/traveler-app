import TravelsService from "../../services/TravelsService";
import useAsync from "../useAsync";

const service = new TravelsService();

export default function useCurrentTriá¹•() {
  const { data, error, loading, act } = useAsync(service.getCurrentTrip);

  return {
    currentTripError: error,
    loadingCurrentTrip: loading,
    getCurrentTrip: act,
    currentTrip: data,
  };
}
