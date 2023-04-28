import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 55em;
    height: 12em;
    gap: 120px;
    background: #fff;
    border-radius: 12px;
    -webkit-box-shadow: 1px 0px 13px 5px #bdbdbd;
    -moz-box-shadow: 1px 0px 13px 5px #bdbdbd;
    box-shadow: 1px 0px 13px 5px #bdbdbd;
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
    /* color: #E21D23; */
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

