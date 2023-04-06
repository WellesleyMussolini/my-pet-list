import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Pet from "../../layout/pets/pet-loader/pet.loader";
import { pet } from "../../services/pet-service";

const DEFAULT_CARD_COUNT = 5; // alterar 

const Dogs = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        pet.get(setPets, "/pets", "data");
        return;
    }, []);

    return (
        <div className={styles.wrapper}>
            <Pet pets={pets} card_amount={DEFAULT_CARD_COUNT} />
        </div>
    );
};

export default Dogs;