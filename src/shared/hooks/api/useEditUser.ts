import useAsync from "../useAsync";
import UserService from "../../services/UserService";

const service = new UserService();

export default function useEditUser() {
  const { data, error, act } = useAsync(service.edit, false);

  return {
    success: data,
    errorEditingUser: error,
    editUser: act,
  };
}
