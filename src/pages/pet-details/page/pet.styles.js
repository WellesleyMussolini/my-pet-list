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
    width: 55em;
    height: 12em;
    gap: 100px;
    background: #fff;
    border-radius: 12px;
`;

export const Stats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
`;

export const Icon = styled.div`
    background-image: url(${props => props.image});
    background-size: 100%;
    background-repeat: no-repeat;
    width: 65px;
    height: 65px;
`;

export const Typography = styled.h2`
    /* color: rgb(187, 14, 14); */
    font-weight: 700;
    color: #E21D23;
    font-size: 14px;
    text-align: center;
    font-family: "Quicksand",sans-serif;
`;

export const StatsInfo = styled.div`
    height: 2em;

    & > p{
        text-align: center;
        font-size: 14px;
        font-family: "Quicksand",sans-serif;
        color: rgb(84, 84, 74);
    }
`;

export const Characteristics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20em;
`;

export const Characteristic = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BreedCharacteristics = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;