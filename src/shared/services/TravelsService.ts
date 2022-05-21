import api from "./api";

export default class TravelsService {
  listUpcomingTrips(headers: any) {
    return api.get(`/travels`, headers);
  }
  listTips(destinationId: number, headers: any) {
    return api.get(`/travels/${destinationId}/tips`, headers);
  }
}
