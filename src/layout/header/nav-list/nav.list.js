import { NavItem, NavList, Navigation } from "./nav.styles";
import { useNavigate } from "react-router-dom";

export const Navigate = ({ navList, property }) => {
    const navigator = useNavigate();
    return (
        <Navigation>
            {
                navList.map((item, index) => <NavList key={index}><NavItem onClick={() => navigator(item.route)}>{item[property]}</NavItem></NavList>)
            }
        </Navigation >
    )
};