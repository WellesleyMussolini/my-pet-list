import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/Loading/Loading";
import { pet } from "../../../services/pet-service";
import { Container, Title } from "./pet.styles";
import PetGallery from "../components/pet-gallery/PetGallery";
import Characteristics from "../components/characteristics/Characteristics";
import PetStats from "../components/pet-stats/PetStats";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        pet.get(setDog, `/pets/${id}`, "data");
        return;
    }, [id]);

    if (!dog) {
        return <LoadingScreen />
    }

    return (
        <Container>
            <Title>{dog.breed}</Title>
            <p>{dog.description}</p>
            <PetStats petList={dog} maleWeight={dog.weight.male} femaleWeight={dog.weight.female} />
            <Characteristics pet={dog.breed_characteristics} />
            <h1>PUPPIES</h1>
            <PetGallery images={dog.images.puppies} />
            <h1>ADULT</h1>
            <PetGallery images={dog.images.gallery} />
        </Container>
    );
};

export default Pet;