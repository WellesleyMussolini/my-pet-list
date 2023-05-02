import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/loading/Loading";
import { pet } from "../../../services/pet-service";
import { Container, Title, Description } from "./pet.styles";
import PetGallery from "../components/pet-gallery/PetGallery";
import Characteristics from "../components/characteristics/Characteristics";
import Overview from "../components/pet-overview/Overview";
import { paragraphs } from "../utils/paragraphs";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        pet.getById(id).then((data) => setDog(data));
        return;
    }, [id]);

    if (!dog) {
        return <LoadingScreen />
    }

    const description = paragraphs(dog.description)
    return (
        <Container>
            <Title>{dog.breed}</Title>
            <Description>{description}</Description>
            <Overview petList={dog} maleWeight={dog.weight.male} femaleWeight={dog.weight.female} />
            <Characteristics pet={dog.breed_characteristics} />
            <Title>PUPPIES</Title>
            <PetGallery images={dog.images.puppies} />
            <Title>GROWN</Title>
            <PetGallery images={dog.images.gallery} />
        </Container>
    );
};

export default Pet;