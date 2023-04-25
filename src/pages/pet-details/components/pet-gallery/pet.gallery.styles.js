import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

export const Gallery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 50em;
    overflow: hidden;
    & {
        gap: 15px;
    }
`;

export const Images = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

export const Controlls = styled.div`
    display: flex;
    flex-direction: row;
`;