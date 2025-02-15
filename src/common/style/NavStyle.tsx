import styled from "styled-components";

export const NavWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 480px;
    height: 8.25vh;
    border-top: 1px solid #eeee;
    z-index: 1;
    background-color: #fff;
    &.hide {
        opacity: 0;
    }
`;

export const NavUl = styled.ul`
    display: flex;
    justify-content: space-around;
    line-height: 8.25vh;
`;
export const NavLi = styled.li`
    font-size: 2.7778vw;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 700;
    color: #bcbcbc;
    &.pin {
        color: #5d5fee;
    }
`;
