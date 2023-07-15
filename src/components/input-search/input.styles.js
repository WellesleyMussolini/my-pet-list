import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Silhouette */
    /* 
    height: 100px;
    margin-top: 80px; 
    */
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 40px;
    z-index: 20;
    width: 28em;
    background: #fff;
    border-radius: 0 10px 10px 0;

    & > svg {
        height: 100%;
        width: 40px;
        /* background: #cd9042; */
        background: rgb(0, 131, 212);
        color: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px;
    };

    & > svg:hover{
        /* background: #d69136; */
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