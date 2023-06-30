import { Block, Text, Input } from "@styles/UI";
import * as S from "./style";

export default function Search() {
    return (
        <>
            <Block.ColumnBox width="100%" height="200px" alignItems="center">
                <Block.RowBox width="900px" height="62px">
                    <Block.RowBox width="152px" justifyContent="space-evenly" alignItems="center" pointer>
                        <Text.Title2 pointer>유저</Text.Title2>
                        <S.DropdownImg src="/icons/dropdown-arrow.svg" alt="dropdown-icon" />
                    </Block.RowBox>

                    <Input.FormInput
                        width="704px"
                        height="100%"
                        fontSize="30px"
                        color="black"
                        placeholder="닉네임을 입력해보세요."
                    />

                    <Block.RowBox width="48px" justifyContent="center" alignItems="center">
                        <S.Icons src="/icons/search.svg" alt="search" />
                    </Block.RowBox>
                </Block.RowBox>
                <Block.Bar width="900px" height="1px" bgColor="black" margin="0 0 33px 0" />

                <Block.RowBox width="900px" height="148px" justifyContent="center">
                    <Block.RowBox
                        width="120px"
                        height="39px"
                        bgColor="gray"
                        borderRadius="20px"
                        justifyContent="center"
                        alignItems="center"
                    >
                        인기 검색어
                    </Block.RowBox>
                    <Block.RowBox width="450px" padding="11px 23px">
                        결과
                    </Block.RowBox>
                </Block.RowBox>
            </Block.ColumnBox>
        </>
    );
}
