import React from "react";
import { navigate } from "./mock/nav.mock";
import { Navigate } from "./nav-list/nav.list";
import { Container, Logo, Navigation } from "./header.styles";
import Bone from "./img/bone.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigator = useNavigate();
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
            <Logo onClick={() => navigator("/")}>
                <img src={Bone} alt="Bone" />
            </Logo>
            <Navigation>
                <Navigate navList={navigate} property="label" />
            </Navigation>
        </Container>
    );
};

export default Header;