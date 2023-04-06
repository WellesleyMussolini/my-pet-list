import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 40px;
    margin-top: 55px;
    margin-bottom: -30px;
    z-index: 20;
    width: 28em;
    background: #fff;

    & > svg {
        height: 100%;
        width: 40px;
        background: #cd9042;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px;
    };

    & > svg:hover{
        background: #d69136;
        transition: 0.5s;
        cursor: pointer;
    }
`;

export const InputSearch = styled.input`
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    padding-left: 25px;
    padding-right: 20px;
    background: transparent;
`;