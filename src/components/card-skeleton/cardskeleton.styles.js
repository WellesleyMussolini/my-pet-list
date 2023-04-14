import styled, { keyframes } from "styled-components";

export const Card = styled.div`
    width: 280px;
    height: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    /* box-shadow: rgba(0, 0, 0, 0.45) 1px 0px 5px 4px; */
    padding: 10px;
    opacity: 0.3;
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

export const SkeletonElement = styled.div`
    opacity: 0.7;
    animation: ${Skeleton} 1s linear infinite alternate;
`;

export const Image = styled(SkeletonElement)`
    width: 100%;
    height: 239.2px;
    margin-bottom: 0.5rem;
`;

export const Id = styled(SkeletonElement)`
    align-self: flex-start;
    width: 70%;
    height: 12px;
    margin-bottom: 0.25rem;
`;

export const Name = styled(SkeletonElement)`
    width: 100%;
    height: 25px;
    margin-top: .45rem;
    margin-bottom: .25rem;
`;