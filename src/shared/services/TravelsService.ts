import api from "./api";

export default class TravelsService {
  listUpcomingTrips(headers: any) {
    return api.get(`/travels`, headers);
  }
  addTravel(body: any, headers: any) {
    return api.post(`/travels`, body, headers);
  }
}
