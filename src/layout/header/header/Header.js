import React from "react";
import styles from "./header.module.css";
import SearchIcon from '@mui/icons-material/Search';
import { Input } from "@mui/material";
import { navigate } from "../mock/nav.mock";
import { Navigate } from "../nav-list/nav.list";

const Header = ({ handleSearch }) => {
    return (
        <header className={styles.header}>
            <ul className={styles.navigation}>
                <Navigate navList={navigate} property="item" />
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


{/* jogar dentro de um array e fazer um map */ }
{/* utilizar o styled components  */ }
{/* npm install @mui/material @mui/styled-engine-sc styled-components */ }