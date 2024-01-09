import styled, { keyframes } from "styled-components";

const dogTailBlur = keyframes`
    from {
      transform: rotate(0);
      opacity: 0;
    };

    50% {
      opacity: 1;
    };

    to {
      transform: rotate(90deg);
      opacity: 0;
    };
`;

const dogHeadAnimation = keyframes`
    from,
    to {
      transform: rotate(45deg);
    }
    33.3% {
      transform: rotate(-45deg);
    }
    66.6% {
      transform: rotate(0);
    }
`;

const dogTorsoAnimation = keyframes`
    from { transform: translateX(-5%) };
    to { transform: translateX(5%) };
`;

const dogEyeAnimation = keyframes`
    from,
    to {
      animation-timing-function: step-end;
      opacity: 1;
    };

    50%,
    55% {
      animation-timing-function: step-start;
      opacity: 0;
    };
`;

const dogTongueAnimation = keyframes`
    from, to { transform: rotate(0) };

    16.6666666667% { transform: rotate(30deg) };

    33.3333333333%, 66.6666666667% { transform: rotate(0) };
    
    50%, 83.3333333333% { transform: rotate(-20deg) };
`;

const dogTongueInner = keyframes`
    from { transform: translateY(5%) };
    to { transform: translateY(22%) };
`;

const dogTailSegment = keyframes`
    from { transform: rotate(-10deg)};
    to { transform: rotate(10deg) };
`;

const dogTailAnimation = keyframes`
    from { transform: rotate(-45deg) };
    to { transform: rotate(45deg) };
`;

const dogEarsAnimation = keyframes`
    42.3%, 71.6% { transform: rotate(-5deg) };
    
    50.3%, 79.6% { transform: rotate(5deg) };
    
    5% { transform: rotate(5deg)};
    
    12% { transform: rotate(-5%)};
    
    from, 33.3%, 66%, to { transform: rotate(0) };
`;

const dogBodyAnimation = keyframes`
    from { transform: translateX(-10%) };
    to { transform: translateX(10%) };
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
    position: relative;

    &,
    & *:before,
    & *:after {
        box-sizing: border-box;
        position: relative;
    };
`;

export const Dog = styled.div`
    width: 100px;
    height: 100px;
    z-index: 1;

    &:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.03);
        transform: translateY(-30%) scale(1.5);
    };

    * {
        position: absolute;
    };
`;

export const DogTail = styled.div`
    width: 22px;
    height: 24.2px;
    background: white;
    bottom: 40%;
    border-radius: 11px;
    left: calc(50% - 11px);
    transform-origin: center bottom;
    animation: ${dogTailSegment} 200ms ease-in-out infinite alternate;
`;

export const DogBody = styled.div`
    border-radius: 50%;
    background: white;
    position: absolute;
    height: 100%;
    width: 100%;
    top: -50%;
    animation: ${dogBodyAnimation} 200ms ease-in-out infinite alternate;
    box-shadow: inset 0 -15px 0 0 #eaebec;

    &::before {
        content: "";
        position: absolute;
        bottom: 90%;
        right: 50%;
        width: 90%;
        height: 90%;
        border-top-left-radius: 100%;
        border-bottom-left-radius: 10%;
        border-top-right-radius: 10%;
        background: rgba(255, 255, 255, 0.4);
        transform-origin: right bottom;
        animation: ${dogTailBlur} 200ms 33.3333333333ms ease-in-out infinite alternate both;
    };

    & > ${DogTail} {
        bottom: 90%;
        animation: ${dogTailAnimation} 200ms ease-in-out infinite alternate;
    };
`;

export const DogHead = styled.div`
    border-radius: 50%;
    background: white;
    position: absolute;
    height: 100%;
    width: 100%;
    animation: ${dogHeadAnimation} 1800ms cubic-bezier(0.11, 0.79, 0, 0.99) infinite;
`;

export const DogTorso = styled.div`
    border-radius: 50%;
    background: white;
    position: absolute;
    height: 100%;
    width: 100%;
    top: -20%;
    animation: ${dogTorsoAnimation} 200ms ease-in-out infinite alternate-reverse;
    box-shadow: inset 0 -15px 0 0 #eaebec;
`;

export const DogEyes = styled.div`
    width: 60%;
    top: 55%;
    left: 20%;
    z-index: 1;

    &:before{
        content: "";
        display: block;
        height: 40px;
        width: 40px;
        border-radius: 40px;
        position: absolute;
        background: #ffc300;
        top: -10px;
        left: -10px;
        z-index: 0;
        border: 4px solid white;
        border-left-width: 0;
        border-bottom-width: 0;
        border-top-width: 0;
        transform: rotate(-45deg);
    };
`;

export const DogEye = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    z-index: 1;
    animation: ${dogEyeAnimation} 1800ms infinite;

    &:first-child{ left: 0 };

    &:last-child{ right: 0 };
`;

export const DogMuzzle = styled.div`
    width: 60%;
    left: 20%;
    height: 50%;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    background: white;
    bottom: -15%;

    &:before, &:after{
        content: "";
        display: block;
        position: absolute;
    };

    &:before{
        width: 6px;
        height: 20px;
        bottom: 0;
        left: calc(50% - 3px);
        background: #eaebec;
    };

    &:after{
        background: black;
        width: 20px;
        height: 15px;
        bottom: 12px;
        left: calc(50% - 10px);
        border-bottom-left-radius: 60% 60%;
        border-bottom-right-radius: 60% 60%;
        border-top-left-radius: 50% 40%;
        border-top-right-radius: 50% 40%;
    };
`;

export const DogTongue = styled.div`
    width: 40px;
    height: 100%;
    left: calc(50% - 20px);
    z-index: -1;
    transform-origin: center top;
    animation: ${dogTongueAnimation} 1800ms - 50ms ease-in-out infinite;

    &:before{
        content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    background: #fd3163;
    animation: ${dogTongueInner} 100ms ease-in-out infinite alternate;
    }
`;

export const DogEars = styled.div`
    width: 40%;
    top: 25%;
    left: 30%;
    animation: ${dogEarsAnimation} 1800ms 100ms ease infinite;
`;

export const DogEar = styled.div`
    bottom: -10px;
    height: 50px;
    width: 50px;
    background: #eaebec;
    animation-duration: 400ms;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-iteration-count: infinite;

    &:first-child{
        border-bottom-left-radius: 80%;
        border-top-right-radius: 80%;
        right: 100%;
        box-shadow: inset -15px 15px 0 1px white;
        transform-origin: right bottom;
        transform: rotate(10deg);
    };

    &:last-child{
        border-top-left-radius: 80%;
        border-bottom-right-radius: 80%;
        left: 100%;
        box-shadow: inset 15px 15px 0 0 white;
        transform-origin: left bottom;
        transform: rotate(-10deg);
    }
`;