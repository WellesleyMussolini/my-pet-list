import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    /* height: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* RIGHT EAR */

    .earTwitch {
        transform-origin: 66px 93px;
        transform: rotate(15deg);
        transition: transform 0.2s ease-in-out;
    };

    .earReturn {
        transform-origin: 66px 93px;
        transform: rotate(0deg);
        transition: transform 0.2s ease-in-out;
    };
`;

export const Loader = styled.div`
    position: relative;
    height: 200px;
    width: 200px;

    & > svg{
        position: absolute;
    };
`;

export const Dog = styled.svg`
    left: 10px;
    bottom: 10px;
    width: 186px;
    height: auto;

    & > svg{
        /* transition: all 0.35s ease-in-out;  */
        transition: all 0.2s ease-in-out;
    };
`;

export const Eyelid = styled.path`
    transition: all 0.2s ease-in-out;
`;

const dash = keyframes`
    0% {
        stroke-dashoffset: 622;
    };
    50% {
        stroke-dashoffset: 155.5;
        transform: rotate(135deg);
    };
    100% {
        stroke-dashoffset: 622;
        transform: rotate(450deg);
    };
`;

export const Path = styled.circle`
    stroke-dasharray: 622;
    stroke-dashoffset: 0;
    transform-origin: center;
    stroke: #FCB316;
    animation: ${dash} 1.4s ease-in-out infinite;
`;

const rotatorAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    };
    100% {
        transform: rotate(270deg);
    };
`;

export const Spinner = styled.svg`
    animation: ${rotatorAnimation} 1.4s linear infinite;
`;