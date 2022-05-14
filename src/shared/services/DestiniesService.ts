import api from "./api";

export default class DestiniesService {
  getAll(headers: any) {
    console.log(headers);
    return api.get(`/destinies`, headers);
  }
}
