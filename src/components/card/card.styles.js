import styled from "styled-components";

export const Wrapper = styled.div`
    width: 280px;
    height: 325px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.45) 1px 0px 5px 4px;
    gap: 5px;
    padding: 10px;
    background: #fff;
    cursor: pointer;
`;

export const Image = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    display: block;
    width: 100%;
    height: 239.2px;
    background-size: cover;
    background-position: center center;
    user-select: none;
    touch-action: none;
    object-fit: cover;
    /* object-fit: contain; */
    /* object-fit: fill; */
`;

export const Breed = styled.h5`
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.334;
    letter-spacing: 0em;
    text-align: center;
    font-weight: bold;
    /* color: #313131; */
    color: #5a5959;
    width: 220px;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
`;

export const Id = styled.p`
    width: 100%;
    text-align: left;
    color: rgb(171, 171, 171);
    font-size: 12px;
    cursor: auto;
`;