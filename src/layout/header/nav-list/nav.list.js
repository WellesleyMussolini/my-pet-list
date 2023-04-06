import { NavItem, NavList, Navigation } from "./nav.styles";

export const Navigate = ({ navList, property }) => {
    return (
        <Navigation>
            {
                navList.map((item, index) => <NavList key={index}><NavItem>{item[property]}</NavItem></NavList>)
            }
        </Navigation >
    )
};