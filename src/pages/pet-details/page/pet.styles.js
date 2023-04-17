import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const BreedVitalStats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 45em;
    height: 15em;
    border: 1px solid black;
`;

export const LifeSpan = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const Image = styled.img`
    width: 90px;
    margin-bottom: 10px;
`;

export const Typography = styled.h2`
    font-size: 1.2em;
    color: rgb(187, 14, 14);
`;