import styled from "styled-components";

export const Container = styled.div`
    background: rgb(80, 5, 5);
    height: 100vh;
`;

export const NotFounded = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 70vh;

    & > h1{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;   
        font-weight: bolder;
        font-size: 50px;
        color: #fff;
    }

    & > h2{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;   
        font-weight: bolder;
        margin-top: 15px;  
        font-size: 25px;
        color: #fff;
    }
`;

export const Logo = styled.img`
    width: 300px; 
    height: 300px;
    background: rgb(80, 5, 5);
`;  