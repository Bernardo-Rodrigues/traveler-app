import TravelsService from "../../services/TravelsService";
import useAsync from "../useAsync";

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
