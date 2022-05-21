import useAsync from "../useAsync";
import DestinationsService from "../../services/DestinationsService";

const service = new DestinationsService();

export default function useAddTravel() {
  const { error, loading, act, data } = useAsync(service.addTravel, false);

  return {
    addTravelError: error,
    loadingAddTravel: loading,
    addTravel: act,
    addTravelSuccess: data,
  };
}
