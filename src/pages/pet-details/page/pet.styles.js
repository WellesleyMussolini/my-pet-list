import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 80px); 
    background: #f4f4f4;
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