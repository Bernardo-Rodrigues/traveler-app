import api from "./api";

export default class ReviewsService {
  add(data: any, destinyId: number, headers: any) {
    return api.post(`/reviews/destinies/${destinyId}`, data, headers);
  }
}
