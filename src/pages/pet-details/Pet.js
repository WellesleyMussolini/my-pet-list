import React, { useState, useEffect } from "react";
import styles from "./pet.module.css";
import { api } from "../../services/api";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import { petService } from "../../services/pet-service";

const Pet = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    
    useEffect(() => {
        petService(setPet, "/" + id, "data");
        return;
    }, [id]);

    if (!pet) {
        return <LoadingScreen />
    }

    return (
        <>
            <h2>BREED: {pet.breed}</h2>
            <h1>PUPPIES</h1>
            <div>
                {pet.images[1].puppies.map((image, index) => (
                    <img src={image} alt="puppy" key={index} />
                ))}
            </div>
            <h1>ADULT HOOD</h1>
            <div>
                {pet.images.map((image, index) => (
                    <img src={image} alt="ADULT" key={index} />
                ))}
            </div>
        </>
    );
};

export default Pet;