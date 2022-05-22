import useAsync from "../useAsync";
import TravelsService from "../../services/TravelsService";

const service = new TravelsService();

export default function useAddTravel() {
  const { error, loading, act, data } = useAsync(service.addTravel, false);

  return {
    addTravelError: error,
    loadingAddTravel: loading,
    addTravel: act,
    addTravelSuccess: data,
  };
}
