import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    /* Silhouette */

    height: 100px;
    margin-top: 80px; 
`;

export const Wrapper = styled.div`
    @media (max-width: 1000px) {
        width: 18em;    
    };

    @media (max-width: 300px) {
        width: 12em;    
    };

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: #fff;
    transition: 1s;
    height: 40px;
    width: 30%;
    z-index: 20;
    border-radius: 0 10px 10px 0;

    & > svg {
        height: 100%;
        width: 40px;
        background: rgb(0, 131, 212);
        color: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px;
    };

    & > svg:hover{
        background: rgb(0, 157, 255);
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