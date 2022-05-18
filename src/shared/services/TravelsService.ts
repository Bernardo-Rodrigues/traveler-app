import api from "./api";

export default class TravelsService {
  listUpcomingTrips(headers: any) {
    return api.get(`/travels`, headers);
  }
}
