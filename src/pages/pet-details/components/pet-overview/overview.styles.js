import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 12em;
    gap: 120px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 45px;
        height: 25em;
    };
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

    @media (max-width: 450px) {
        width: 55px;
        height: 55px;
    };

    @media (max-width: 300px) {
        width: 50px;
        height: 50px;
    };
`;

export const Typography = styled.h2`
    font-weight: 700;
    color: ${props => props.color};
    font-size: 14px;
    text-align: center;
    font-family: "Quicksand",sans-serif;
`;

export const Info = styled.p`
    text-align: center;
    font-size: 14px;
    font-family: "Quicksand",sans-serif;
    color: rgb(84, 84, 74);
`;