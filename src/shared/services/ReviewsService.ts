import api from "./api";

export default class ReviewsService {
  add(data: any, destinationId: number, headers: any) {
    return api.post(`/reviews/destinies/${destinationId}`, data, headers);
  }
}
