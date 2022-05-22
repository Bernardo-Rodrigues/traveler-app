import api from "./api";

export default class DestiniationsService {
  getAll(headers: any) {
    return api.get(`/destinations`, headers);
  }
  getAllFavorites(headers: any) {
    return api.get(`/destinations/favorites`, headers);
  }
  getTop(headers: any) {
    return api.get(`/destinations/top`, headers);
  }
  getOne(destinationName: string, headers: any) {
    return api.get(`/destinations/${destinationName}`, headers);
  }
  favorite(destinationId: number, headers: any) {
    return api.post(`/destinations/${destinationId}/favorite`, {}, headers);
  }
  unfavorite(destinationId: number, headers: any) {
    return api.post(`/destinations/${destinationId}/unfavorite`, {}, headers);
  }
  listTips(destinationId: number, headers: any) {
    return api.get(`/destinations/${destinationId}/tips`, headers);
  }
}
