import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/loading/Loading";
import { pet } from "../../../services/pet-service";
import { Container, Title, Description } from "./pet.styles";
import PetGallery from "../components/pet-gallery/PetGallery";
import Characteristics from "../components/characteristics/Characteristics";
import Overview from "../components/pet-overview/Overview";

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

    return (
        <Container>
            <Title>{dog.breed}</Title>
            <Description>
                {dog.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Description>
            <Overview petList={dog} maleWeight={dog.weight.male} femaleWeight={dog.weight.female} />
            <Characteristics pet={dog.breed_characteristics} />
            <h1>PUPPIES</h1>
            <PetGallery images={dog.images.puppies} />
            <h1>GROWN</h1>
            <PetGallery images={dog.images.gallery} />
        </Container>
    );
};

export default Pet;