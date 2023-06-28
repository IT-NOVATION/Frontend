import styled from "styled-components";

export const Nav = styled.div<{ isVisible: boolean; isMain: boolean }>`
    width: 100vw;

    /* height: 85px; */
    height: ${({ isVisible }) => (isVisible ? "85px" : "-188px")};
    z-index: 100;
    padding: 20px 23px;

    /* position: fixed;
    transform: translate(-50%);
    transition: all 0s; */

    display: flex;
    justify-content: space-between;
    background-color: ${({ isMain }) => (isMain ? "transparent" : "white")};
    color: ${({ isMain }) => (isMain ? "white" : "black")};
`;

export const HomeLogo = styled.img`
    width: 185px;
    cursor: pointer;
`;

export const Profile = styled.img`
    width: 31px;
    border-radius: 100px;
    cursor: pointer;
`;

export const Icons = styled.img`
    width: 31px;
    border-radius: 100px;
    color: aqua;
    cursor: pointer;
`;
