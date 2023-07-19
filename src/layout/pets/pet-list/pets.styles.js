import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    min-height: 715px;

    @media (max-width: 1080px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media (max-width: 775px) {
        grid-template-columns: 1fr;
    };

    opacity: 0;
    transform: translateY(12px);
    animation: fade-in 0.4s ease forwards;

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        };
        to {
            opacity: 1;
            transform: translateY(0px);
        };
    };
`;