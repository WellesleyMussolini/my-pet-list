import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 80px;
    background: rgb(8, 97, 170);
    z-index: 30;
    width: 100%;
    transition: all 0.3s;
    opacity: ${(props) => (props.scrollDown ? "0.6" : "1")};
`;

export const Item = styled.a`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    padding: 15px 20px;
    position: relative;
    cursor: pointer;

    &::after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    };

    &:hover::after {
        width: 100%;
        left: 0;
    };
`;

export const BoneIcon = styled.img`
    width: 45px;
    transition: transform 0.4s ease;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
    };

    &:not(:hover) {
        filter: grayscale(100%);
        transition: filter 1.5s ease 0.4s, transform 0.4s ease;
    };
`;