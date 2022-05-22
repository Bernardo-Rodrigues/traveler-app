import api from "./api";

export default class AvatarsService {
  getAll(section: string, username: string) {
    return api.get(`/avatars?section=${section}&username=${username}`);
  }
}
