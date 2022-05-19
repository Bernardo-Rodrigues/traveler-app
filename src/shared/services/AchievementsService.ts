import api from "./api";

export default class AchievementsService {
  receive(destinyId: number, headers: any) {
    return api.get(`/achievements/destinies/${destinyId}`, headers);
  }
}
