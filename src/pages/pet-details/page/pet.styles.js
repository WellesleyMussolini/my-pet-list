import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 80px); 
    background: #f4f4f4;
`;

export const Wrapper = styled.div`
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
    height: 12em;
    gap: 100px;
    background: #fff;
`;

export const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* gap: 10px; */
`;

export const Image = styled.img`
    width: 55px;
    margin-bottom: 10px;
`;

export const Typography = styled.h2`
    font-size: 1em;
    color: rgb(187, 14, 14);
`;