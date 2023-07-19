import styled from "styled-components";
import { Themes } from "../themes/themes";

export const Styles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: ${Themes.background};
`;