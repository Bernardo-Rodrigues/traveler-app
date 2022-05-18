import useAsync from "../useAsync";
import DestiniesService from "../../services/DestiniesService";

const service = new DestiniesService();

export default function useAddTravel() {
  const { error, loading, act, data } = useAsync(service.addTravel, false);

  return {
    addTravelError: error,
    loadingAddTravel: loading,
    addTravel: act,
    addTravelSuccess: data,
  };
}
