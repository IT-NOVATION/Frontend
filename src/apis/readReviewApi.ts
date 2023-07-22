import { IMutateReview } from "@interfaces/review";
import { baseApi } from "./instance";

const GET_REVIEW_URI = "/review/Info/";
const PUSH_REVIEW_LIKE = "/push/reviewlike";
const GET_COMMENTS = "/comment/read";
export const ReadReviewApi = {
  getReview: async (reviewId: number) =>
    await baseApi.get(GET_REVIEW_URI + reviewId).then((res) => res.data),
  pushReviewLike: async (reviewId: number) =>
    await baseApi.post(PUSH_REVIEW_LIKE, { reviewId }).then((res) => res.data),
  getComments: async (reviewId: number, pageParam: number) =>
    await baseApi
      .get(GET_COMMENTS, { params: { reviewId, page: pageParam } })
      .then((res) => res.data),
};
