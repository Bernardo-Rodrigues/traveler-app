import useAsync from "../useAsync";
import AvatarsService from "../../services/AvatarsService";

const service = new AvatarsService();

export default function useAvatars() {
  const { data, loading, error } = useAsync(service.getAll);

  return {
    avatars: data,
    loadingAvatars: loading,
    listAvatarsError: error,
  };
}
