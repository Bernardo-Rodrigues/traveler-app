import api from "./api";

export default class TitlesService {
  getAll(username: string, headers: any) {
    return api.get(`/titles?username=${username}`, headers);
  }
}
