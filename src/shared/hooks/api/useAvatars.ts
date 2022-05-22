import useAsync from "../useAsync";
import AvatarsService from "../../services/AvatarsService";
import useContexts from "../useContexts";

const service = new AvatarsService();

export default function useAvatars() {
  const contexts = useContexts();
  const { section } = contexts.section;
  const { user } = contexts.user;
  const { data, loading, error } = useAsync(() =>
    service.getAll(section, user?.username)
  );

  return {
    avatars: data,
    loadingAvatars: loading,
    listAvatarsError: error,
  };
}
