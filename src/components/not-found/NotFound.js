import React from 'react';
import Header from "../header/Header";
import Pokeball from '../../assets/img/pokeball.png';
import styles from './notfound.module.css';

function NotFound() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.NotFound}>
                <h1>404</h1>
                <h2>Ops... Page does not exist</h2>
                <img src={Pokeball} alt="Pokeball" id={styles.pokeball} />
            </div>
        </div>
    )
}

export default NotFound;