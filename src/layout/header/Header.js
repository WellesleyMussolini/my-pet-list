import React from "react";
import { navigate } from "./mock/nav.mock";
import { Navigate } from "./nav-list/nav.list";
import { Container } from "./header.styles";

const Header = () => {
    const [scroll, setScroll] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        return currentScrollY > 0 ? setScroll(true) : setScroll(false);
    };
    return (
        <Container scrollDown={scroll}>
            <Navigate navList={navigate} property="label" />
        </Container>
    );
};

export default Header;