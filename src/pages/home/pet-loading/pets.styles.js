import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    background: #edf0f2;
`;

export const LoadingCardScreen = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    margin: 100px 0;
    min-height: 700px;
`;