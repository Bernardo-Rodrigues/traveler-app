import api from "./api";

export default class AchievementsService {
  receive(destinationId: number, headers: any) {
    return api.get(`/achievements/destinies/${destinationId}`, headers);
  }
  list(headers: any) {
    return api.get(`/achievements`, headers);
  }
}
