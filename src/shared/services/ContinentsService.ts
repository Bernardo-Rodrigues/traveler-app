import api from "./api";

export default class ContinentsService {
  getAll(headers: any) {
    return api.get(`/continents`, headers);
  }
}
