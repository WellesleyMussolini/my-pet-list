import React from "react";
import styles from "./notfound.module.css";
import Submarine from "../submarine/Submarine";
import Header from "../header/Header";

const NotFound = () => {

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.error}>
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                </div>
                <Submarine />
            </div>
        </div>
    );
};

export default NotFound;