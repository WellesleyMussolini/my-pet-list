import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background: #EFEFEF;
    overflow: hidden;
    padding: 110px 0;
    gap: 50px;

    /* background: #f4f4f4; */
`;

export const Title = styled.h1`
    font-size: 2.2em;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: gray;
    margin: 0 !important;
`;

export const Description = styled.div`
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    gap: 20px; 

    p {
        line-height: 1.6;
        color: #333;
        margin-bottom: 20px;
    };

    @media (min-width: 800px) {
        /* padding: 40px; */
        font-size: 16px;
        width: 55em;
    };

    /* @media (max-width: 775px) {
        width: 90%;
        max-width: 20em;
        font-size: 14px;
    };  */

    @media (max-width: 400px) {
        /* width: 85%; */
        font-size: 14px;
    }; 
`;


export const Puppies = styled.div`
    width: 1000px;
    background-color: red;
    height: 400px;
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