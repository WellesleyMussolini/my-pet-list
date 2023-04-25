import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: #f4f4f4;
    padding: 100px 0;
    gap: 20px;

    & > p{
        width: 80em;
    };
`;

export const Title = styled.h1`
    font-size: 2.2em;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: gray;
`;

export const Puppies = styled.div`
    width: 1000px;
    background-color: red;
    height: 400px;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: row;
    & > img{
        width: 50em;
        object-fit: cover;
    }
`;

export const Adult = styled.div`
    display: flex;
    flex-direction: row;
`;