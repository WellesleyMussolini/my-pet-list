import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55em;
    height: 12em;
    gap: 120px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 1080px) {
        flex-direction: row;
    };

    @media (max-width: 775px) {
        flex-direction: column;
        width: 10em;
        height: 56em;
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