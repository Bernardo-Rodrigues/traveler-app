import api from "./api";

export default class DestiniesService {
  getAll(headers: any) {
    return api.get(`/destinies`, headers);
  }
  getAllFavorites(headers: any) {
    return api.get(`/destinies/favorites`, headers);
  }
  getTop(headers: any) {
    return api.get(`/destinies/top`, headers);
  }
  getOne(destinyName: string, headers: any) {
    return api.get(`/destinies/${destinyName}`, headers);
  }
  favorite(destinyId: number, headers: any) {
    return api.post(`/destinies/${destinyId}/favorite`, {}, headers);
  }
  unfavorite(destinyId: number, headers: any) {
    return api.post(`/destinies/${destinyId}/unfavorite`, {}, headers);
  }
  addTravel(destinyId: number, body: any, headers: any) {
    return api.post(`/destinies/${destinyId}/travel`, body, headers);
  }
}
