import styled from "styled-components";

export const Container = styled.div`
    margin: 0 100%;
    cursor: grab;
    @media (min-width: 800px) {
        width: 80em;
    };

    @media (max-width: 775px) {
        width: 22em;
    };
    & .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 20px 60px 20px;
    }

    .swiper {
        width: 100%;
    }

    & .swiper:active {
        cursor: grabbing;
    }
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