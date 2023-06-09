import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 30px;
    height: 80px;
    background: rgb(8, 97, 170);
    z-index: 30;
    width: 100%;
    transition: all 0.3s;
    opacity: ${(props) => (props.scrollDown ? "0.6" : "1")};
`;