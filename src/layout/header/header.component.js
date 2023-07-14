import { Container, BoneIcon, Item } from "./header.styles";
import React from "react";
import Bone from "./img/bone.png";
import { Languages } from "./language/Languages";

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
            <BoneIcon src={Bone} alt="Bone" />
            <Item><Languages /></Item>
        </Container>
    );
};

export default Header;