import styled from "styled-components";
import { Themes } from "../../themes/themes";

export const Wrapper = styled.div`
    border-radius: 4px;
    height: 325px;
    width: 250px;
    padding: 1.5rem;
    background: #fff;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.4s ease-out;
    box-shadow: rgba(0, 0, 0, 0.45) 1px 0px 5px 1px;
    
    &:hover:before {
        opacity: 1;
    }; 

    &:before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0; 
        /* border-radius: 15px; */
        background: rgba(0, 0, 0, 0.6);
        transition: 0.5s;
        z-index: 2;
    };
`;

export const Image = styled.div`   
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    user-select: none;
    touch-action: none;
    object-fit: cover; 
    /* object-fit: contain; */
    /* object-fit: fill; */
    /* transition: 0.4s ease; */
    overflow: hidden;
    &:hover{
        transform: scale(1.08);
    };  
`;

export const Info = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s ease;

    ${Wrapper}:hover & {
        opacity: 1;
        transform: translateY(0px);
        pointer-events: auto;
    };
    
    & > p{
        letter-spacing: 1px;
        font-size: 15px;
        margin-top: 8px;
    };

    & > button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
        width: 100%;
        border-radius: 7px;
        border: none;
        position: center;
        outline: none;
        transition: 0.5s ease; 
        font-weight: bolder;
        background: ${Themes.cancel};
        color: ${Themes.darkgray};
        cursor: pointer;
        
        &:hover {
            background: ${Themes.primary.default};
            color: ${Themes.white};
        };
    };
`;