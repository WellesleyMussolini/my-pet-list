import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
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
`;