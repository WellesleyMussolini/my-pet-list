import styled from "styled-components";

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const NavList = styled.li`
    display: table-cell;
    position: relative;
    padding: 15px 0;
    cursor: pointer;
`;

export const NavItem = styled.a`
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bolder;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    padding: 15px 20px;
    position: relative;

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
    }

    /* ICONS */

    & > img {
        width: 45px;
        cursor: pointer;
        transition: transform 0.4s ease;
    }

    & > img:hover {
        transform: scale(1.2);
    }

    &:not(:hover) img {
        filter: grayscale(100%);
    }

    &:has(img)::after {
        display: none;
    }
`;