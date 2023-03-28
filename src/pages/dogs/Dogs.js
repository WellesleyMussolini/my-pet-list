import React, { useState, useEffect } from "react";
import styles from "./dogs.module.css";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { api } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { petRouteName } from "../../utils/pet.route.name";

const Dogs = () => {
    const [pets, setPets] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        api.get("/")
            .then((response) => setPets(response.data))
            .catch((error) => console.log(error));
    }, []);

    const handleGetPetId = (id) => navigate(`/dogs/${petRouteName(id.breed)}`);

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <ul className={styles.list}>
                    {pets.map((pet, index) => (
                        <Card key={index}
                            image={pet.images[0].profile} image_alt={pet.breed}
                            id={pet._id}
                            name={pet.breed}
                            handle_details={() => handleGetPetId(pet)}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Dogs;