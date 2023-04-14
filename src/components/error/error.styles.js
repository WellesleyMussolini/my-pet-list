import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
    flex-direction: column;
`;

export const ErrorMessage = styled.h1`
    font-weight: bolder;
    font-size: 2.2em;
    color: rgb(204, 68, 68);
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;