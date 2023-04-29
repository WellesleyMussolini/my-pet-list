import styled from "styled-components";
import BackgroundPaws from "../../img/paws.svg";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: rgba(106, 106, 106);
    & > h1{
        text-align: center;
        font-weight: bolder;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;

export const Wrapper = styled.div`
    width: 40em;
    margin-top: 30px;
    padding-bottom: 20px;
    background-color: #fff;
`;

export const TitleContainer = styled.div`
    background: url(${BackgroundPaws}) #fff; 
    background-size: auto 115px;
    background-position: 200px;
    margin-bottom: 20px;

    padding: 20px 10px 15px;
    border-bottom: 3px dashed #e2e2e2;

    & > h3{
        font-size: 1.4em;
        font-weight: bolder;
        margin-left: 10px;
        margin-right: 10px;
    }

    &:hover{
        background: rgb(0, 157, 255);
        color: #fff;
        cursor: pointer;
    }
`;

export const Characteristic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 0 40px;
    margin-top: 10px;

    font-weight: 600;
    color: rgba(146, 146, 146);

    &:hover {
        background: rgb(36, 169, 251);
        transition: all 0.5s ease;
        cursor: pointer;
    }
    
    &:hover p {
        color: #fff;
    }

    &:hover svg{
        color: #fff !important;
    } 

    &:hover svg:not([style*="color: rgb(36, 169, 251)"]) {
        color: rgba(0, 0, 0, 0.26) !important; 
    }

    & > div{
        display: flex;
        flex-direction: row;
        gap: 2px;
        padding: 6px 0;
        & > svg{
            font-size: 1.4em !important;
        }
    }
`;