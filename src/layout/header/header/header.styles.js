import styled from "styled-components";

export const Container = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 80px;
    background: black;
    z-index: 10;
    width: 100%;
`;

export const Logo = styled.div`
    position: absolute;
    left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img{
        width: 45px;
        cursor: pointer;
    }

    & > img:hover{
        transform: scale(1.1);
        transition: 0.5s;
    }
`;

export const Navigation = styled.ul`
    flex-grow: 1;
`;