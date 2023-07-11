import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import Loading from "../../components/loading/Loading";
import { pet } from "../../services/pet-service";
import { Container, Title, Description } from "./pet.styles";
import PetGallery from "./components/pet-gallery/PetGallery";
import Characteristics from "./components/characteristics/Characteristics";
import Overview from "./components/pet-overview/Overview";
import { paragraphs } from "./utils/paragraphs";
import { UseLanguage } from "../../context/languageContext";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);
    const { language } = UseLanguage();
    console.log(dog)
    useEffect(() => {
        pet.getById(id).then((data) => setDog(data));
        return;
    }, [id]);

    // if (!dog) return <Loading />
    if (!dog) return <p>Loading...</p>

    const description = paragraphs(dog.description[language.value]);
    return (
        <Container>
            <Title>{dog.breed}</Title>
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