import React from "react";
import styles from "./header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <PetsIcon />
            </div>
            <ul className={styles.navigation}>
                <li><a>My Pets</a></li>
                <li><a>Pets</a></li>
                {/* <div className={styles.pet_paw}>
                        <PetsIcon style={{ color: "#fff" }} />
                    </div> */}
            </ul>
            <div className={styles.search}>
                    <Input type="text" placeholder="type a breed" disableUnderline={true} />
                    <SearchIcon />
            </div>
        </header>
    );
};

export default Header;