import AvatarsService from "../../services/AvatarsService";
import useAsync from "../useAsync";
import useContexts from "../useContexts";

const service = new AvatarsService();

export default function useAvatars() {
  const contexts = useContexts();
  const { section } = contexts.section;

  const { data, loading, error } = useAsync(() =>
    service.getAll(section, "default")
  );

  return {
    avatars: data,
    loadingAvatars: loading,
    listAvatarsError: error,
  };
}
