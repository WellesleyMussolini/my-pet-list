import React, { useState, useEffect, useMemo } from "react";
import styles from "./home.module.css";
import Header from "../../components/header/Header";
// import Class from "../../components/class/Class";
import { useNavigate } from "react-router-dom";
import { array_filter } from "../../utils/array.filter";
import CardSkeleton from "../../components/card-skeleton/CardSkeleton";
import { api } from "../../services/api";
import Card from "../../components/card/Card";
import { petRouteName } from "../../utils/pet.route.name";

const DEFAULT_CARD_COUNT = 5;

const Dogs = () => {
    const [pets, setPets] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        api.get("/")
            .then((response) => setPets(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handlePets = array_filter(pets, search, "breed");

    const handleGetPetId = (id) => navigate(`/pet/${petRouteName(id.breed)}`);

    return (
        <>
            <Header handleSearch={(event) => setSearch(event.target.value)} />
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {pets.length === 0 ? (
                        Array.from({ length: DEFAULT_CARD_COUNT }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))
                    ) : (
                        handlePets.map((pet, index) => (
                            <Card
                                key={index}
                                image={pet.images[0].profile}
                                image_alt={pet.breed}
                                id={pet._id}
                                name={pet.breed}
                                handle_details={() => handleGetPetId(pet)}
                            />
                        ))
                    )}
                </ul>
            </div>
        </>
    );
};

export default Dogs;