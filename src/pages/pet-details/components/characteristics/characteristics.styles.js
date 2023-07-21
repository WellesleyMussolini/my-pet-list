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
    @media (max-width: 775px) {
        width: 20em;
    };
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