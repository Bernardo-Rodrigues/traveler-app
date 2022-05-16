import api from "./api";

export default class DestiniesService {
  getAll(headers: any) {
    return api.get(`/destinies`, headers);
  }
  getOne(destiny: string, headers: any) {
    return api.get(`/destinies/${destiny}`, headers);
  }
}
