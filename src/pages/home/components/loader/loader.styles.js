import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    gap: 20px;
    background: #edf0f2;
`;

export const Silhouette = styled.div`
    height: 100px;
    margin-top: 80px; 
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const LoadingCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    min-height: 715px;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media (max-width: 775px) {
        grid-template-columns: 1fr;
    };
`;