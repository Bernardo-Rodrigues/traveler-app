import useAsync from "../useAsync";
import UserService from "../../services/UserService";

const service = new UserService();

export default function useSignIn() {
  const { error, data, act } = useAsync(service.signIn, false);

  return {
    errorSigningIn: error,
    success: data,
    signIn: act,
  };
}
