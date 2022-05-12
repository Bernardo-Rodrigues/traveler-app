import api from "./api";

export default class AvatarsService {
  getAll() {
    return api.get(`/avatars`);
  }
}
