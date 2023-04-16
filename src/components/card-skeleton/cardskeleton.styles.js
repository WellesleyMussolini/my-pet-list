import styled, { keyframes } from "styled-components";

export const Card = styled.div`
    width: 280px;
    height: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.075) 1px 0px 5px 4px;
    padding: 10px;
    cursor: pointer;
`;

export const Skeleton = keyframes`
    0% {
        background: hsl(200, 20%, 70%);
    }
    100% {
        background: hsl(200, 20%, 95%);
    }
`;

const load = keyframes`
    100% {
        background-position: -100% 0;
    }
`;

export const SkeletonElement = styled.div`
    opacity: .8;
    animation: ${Skeleton} 1s linear infinite alternate;
`;

export const Image = styled(SkeletonElement)`
    width: 100%;
    height: 239.2px;
    margin-bottom: 0.5rem;

    &.light-beam {
        background: linear-gradient(
            120deg,
            #e5e5e5 30%,
            #f0f0f0 38%,
            #f0f0f0 40%,
            #e5e5e5 48%
        );
        background-size: 200% 100%;
        background-position: 100% 0;
        animation: ${load} 2s infinite;
    }
`;

export const Id = styled(SkeletonElement)`
    align-self: flex-start;
    width: 70%;
    height: 12px;
    margin-bottom: 0.25rem;

    &.light-beam {
        background: linear-gradient(
            120deg,
            #e5e5e5 30%,
            #f0f0f0 38%,
            #f0f0f0 40%,
            #e5e5e5 48%
        );
        background-size: 200% 100%;
        background-position: 100% 0;
        animation: ${load} 2s infinite;
    }
`;

export const Name = styled(SkeletonElement)`
    width: 100%;
    height: 25px;
    margin-top: .45rem;
    margin-bottom: .25rem;

    &.light-beam {
        background: linear-gradient(
            120deg,
            #e5e5e5 30%,
            #f0f0f0 38%,
            #f0f0f0 40%,
            #e5e5e5 48%
        );
        background-size: 200% 100%;
        background-position: 100% 0;
        animation: ${load} 2s infinite;
    }
`;