import React, { useState } from "react";
import styles from "./home.module.css";
import { api } from "../../services/api";
import Pet from "../../layout/pets/pet-loader/pet.loader";
import { petService } from "../../services/pet-service";

const DEFAULT_CARD_COUNT = 5;

const Dogs = () => {
    const [pets, setPets] = useState([]);

    petService(setPets);

    return (
        <>
            <div className={styles.wrapper}>
                <Pet array={pets} card_amount={DEFAULT_CARD_COUNT} />
            </div>
        </>
    );
};

export default Dogs;


// const [search, setSearch] = useState("");
{/* <Header handleSearch={(event) => setSearch(event.target.value)} /> */ }
