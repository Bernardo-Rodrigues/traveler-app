import useAsync from "../useAsync";
import ReviewsService from "../../services/ReviewsService";

const service = new ReviewsService();

export default function useAddReview() {
  const { error, loading, act } = useAsync(service.add, false);

  return {
    addReviewError: error,
    loadingAddReview: loading,
    addReview: act,
  };
}
