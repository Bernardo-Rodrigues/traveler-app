import useAsync from "../useAsync";
import UserService from "../../services/UserService";

const service = new UserService();

export default function useSignUp() {
  const { error, data, act } = useAsync(service.signUp, false);

  return {
    errorSigningUp: error,
    success: data,
    signUp: act,
  };
}
