import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import Pet from "../../layout/pets/pet-loader/pet.loader";
import { petService } from "../../services/pet-service";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";

const DEFAULT_CARD_COUNT = 5;

const Dogs = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService(setPets, "/", "data");
        return;
    }, []);

    return (
        <div className={styles.wrapper}>
            <Pet pets={pets} card_amount={DEFAULT_CARD_COUNT} />
            <LoadingScreen /> 
        </div>
    );
};

export default Dogs;