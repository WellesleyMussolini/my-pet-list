import styled from "styled-components";

export const Text = styled.h1`
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: bolder;
    color: ${props => props.color};
    font-size: 2.2em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    min-height: 715px;
    margin: 0;
`;