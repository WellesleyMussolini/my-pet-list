import React from "react";
import { navigate } from "../mock/nav.mock";
import { Navigate } from "../nav-list/nav.list";
import { Container, Navigation } from "./header.styles";

const Header = () => {
    return (
        <Container>
            <Navigation>
                <Navigate navList={navigate} property="label" />
            </Navigation>
        </Container>
    );
};

export default Header;