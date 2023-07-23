import { ReadReviewApi } from "@apis/readReviewApi";
import * as S from "./style";
import { Block, Button, Text } from "@styles/UI";
import theme from "@styles/theme";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useLoginState from "@hooks/useLoginState";
import { useSetRecoilState } from "recoil";
import { ModalState, modalStateAtom } from "@recoil/modalAtom";

type Props = {
  reviewId: number;
  reviewLikeNum: number;
  pushedReviewLike?: boolean;
};

export default function Like({
  reviewId,
  pushedReviewLike,
  reviewLikeNum,
}: Props) {
  const queryClient = useQueryClient();
  const setModalState = useSetRecoilState(modalStateAtom);
  const { loginState, userId } = useLoginState();
  const [activateAni, setActivateAni] = useState(false);
  const mutateLike = async () => {
    try {
      await ReadReviewApi.pushReviewLike(reviewId);
      await queryClient.invalidateQueries(["review", `${reviewId}`]);
      setActivateAni(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLikeClick = async () => {
    if (!loginState) {
      setModalState(ModalState.LoginForm);
    } else {
      await mutateLike();
    }
  };
  const handleViewLikeList = () => {
    // 좋아요 누른 사람들의 목록 보여주기
  };
  return (
    <Block.RowBox margin="0 0 15px 0" justifyContent="center" gap="13px">
      {pushedReviewLike === true ? (
        <Button.Button
          width="131px"
          height="45px"
          border={`0.7px solid ${theme.colors.main}`}
          borderRadius="80px"
          bgColor="white"
          onClick={handleLikeClick}
        >
          <S.AnimateHeart
            activate={activateAni}
            src="/icons/ReadReview/heart_white.svg"
          />
          <Text.Body4 margin="0 0 0 8px" color="main">
            {reviewLikeNum}
          </Text.Body4>
        </Button.Button>
      ) : (
        <Button.Button
          width="131px"
          height="45px"
          borderRadius="80px"
          bgColor="main"
          onClick={handleLikeClick}
        >
          <S.Icon src="/icons/ReadReview/heart_white.svg" />
          <Text.Body4 margin="0 0 0 8px" color="white">
            Like
          </Text.Body4>
        </Button.Button>
      )}
      <Button.Button
        width="45px"
        height="45px"
        borderRadius="80px"
        border="0.7px solid #B3B3B3"
        bgColor="white"
        onClick={handleViewLikeList}
      >
        <S.Icon src="/icons/ReadReview/more.svg" />
      </Button.Button>
    </Block.RowBox>
  );
}
