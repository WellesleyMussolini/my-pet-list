import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Loading from "../../components/loading/loading.component"; 
import { pet } from "../../services/pet-service";
import { Container, Title, Description } from "./pet.styles";
import PetGallery from "./components/pet-gallery/gallery.component";
import Characteristics from "./components/characteristics/characteristics.component";
import Overview from "./components/pet-overview/Overview";
import { paragraphs } from "./utils/paragraphs";
import { UseLanguage } from "../../context/languageContext";
import { breedName } from "../../utils/breedName";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const { language } = UseLanguage();
    useEffect(() => {
        pet.getById(id).then((data) => setDog(data));
        return;
    }, [id]);

    if (!dog) return <Loading />

    const description = paragraphs(dog.description[language.value]);
    const petName = breedName(dog, language.value);
    return (
        <Container>
            <Title>{petName}</Title>
            <Description>{description}</Description>
            <Overview petList={dog} maleWeight={dog.weight.male} femaleWeight={dog.weight.female} />
            <Characteristics pet={dog.breed_characteristics} />
            <Title>PUPPIES</Title>
            <PetGallery images={dog.images.puppies} />
            <Title>GROWN</Title>
            <PetGallery images={dog.images.gallery} pet={dog.breed} />
        </Container>
    );
};

export default Pet;