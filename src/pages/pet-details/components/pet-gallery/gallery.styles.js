import styled from "styled-components";

export const Container = styled.div`
    margin: 0 100%;
    cursor: grab;
    /* width: 50em; */

    @media (min-width: 800px) {
        width: 58em;
    };
    
    /* @media (max-width: 800px) {
        width: 40em;
    }; */

    @media (max-width: 775px) {
        width: 22em;
    };

    & .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        font-size: 18px;
        background: transparent;
        
        padding: 0 20px 60px 20px;
    };

    .swiper {
        width: 100%;
    };

    & .swiper:active {
        cursor: grabbing;
    };
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* padrão */
`;