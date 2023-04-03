import React from "react";
import styles from "./header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';

const Header = ({ handleSearch }) => {

    return (
        <header className={styles.header}>
            {/* <div className={styles.menu}> */}
                {/* <PetsIcon /> */}
            {/* </div> */}
            <ul className={styles.navigation}>
                <li><a>My Pets</a></li>
                <div className={styles.petPaw}>
                    <a><PetsIcon /></a>
                </div>
                <li><a>Pets</a></li>
            </ul>
            <div className={styles.search}>
                <Input
                    type="text"
                    placeholder="type a breed"
                    disableUnderline={true}
                    onChange={handleSearch} />
                <SearchIcon />
            </div>
        </header>
    );
};

export default Header;