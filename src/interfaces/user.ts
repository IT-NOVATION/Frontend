import { IReviewPreview } from "./review";

export enum Grade {
  "STANDARD",
  "PREMIUM",
  "VIP",
  "SPECIAL",
}

export interface IUserBase {
  userId: number;
}
export interface IReviewTimeUser extends IUserBase {
  profileImg: string;
  nickName: string;
  introduction?: string;
  grade: Grade;
  followers: number;
  followings: number;
  reviews: IReviewPreview[];
}
export interface IReadReviewUser extends IUserBase {
  bgImg: string;
  nickname: string;
  grade: Grade;
  introduction: string;
  profileImg: string;
  followerNum: number;
  followingNum: number;
}
export interface IReadReviewLoginUser {
  pushedFollow: boolean;
  pushedReviewLike?: boolean;
}
export interface IMovieLogUser {
  userId: number;
  bgImg?: string;
  nickname: string;
  introduction?: string;
  grade: Grade;
  profileImg?: string;
}
