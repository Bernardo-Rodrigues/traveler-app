import api from "./api";

export default class UserService {
  signUp(data: any) {
    return api.post("/users/sign-up", data);
  }
  signIn(data: any) {
    return api.post("/users/sign-in", data);
  }
  edit(data: any, headers: any) {
    return api.post("/users/edit", data, headers);
  }
}
