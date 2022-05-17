import api from "./api";

export default class DestiniesService {
  getAll(headers: any) {
    return api.get(`/destinies`, headers);
  }
  getAllFavorites(headers: any) {
    console.log("foi");
    return api.get(`/destinies/favorites`, headers);
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
}