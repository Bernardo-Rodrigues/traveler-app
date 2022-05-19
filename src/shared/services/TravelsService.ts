import api from "./api";

export default class TravelsService {
  listUpcomingTrips(headers: any) {
    return api.get(`/travels`, headers);
  }
  listTips(destinyId: number, headers: any) {
    return api.get(`/travels/${destinyId}/tips`, headers);
  }
}
