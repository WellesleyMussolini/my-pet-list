import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    height: 700px;
`;