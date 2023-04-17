import styled from "styled-components";

export const Container = styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 80px); */
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: red;
`;

export const BreedVitalStats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 45em;
    height: 15em;
    border: 1px solid black;
    gap: 100px;
`;

export const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`;

export const Image = styled.img`
    width: 65px;
    margin-bottom: 10px;
`;

export const Typography = styled.h2`
    font-size: 1em;
    color: rgb(187, 14, 14);
`;