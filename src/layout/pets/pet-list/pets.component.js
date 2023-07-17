import React from "react";
import Card from "../../../components/card/card.component";
import { usePetNavigate } from "../pet-navigate/pet.navigate";
import { Container } from "./pets.styles";
import { useSpring } from "react-spring";
import Error from "../../../components/error/error.component";
import { breedName } from "../../../utils/breedName";
import { UseLanguage } from "../../../context/languageContext";

const Pets = ({ pets }) => {
    const handleGetPetName = usePetNavigate();
    const { language } = UseLanguage();

    const startAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
    });

    if (pets.length === 0) return <Error message="NO PET FOUND" color="rgba(0, 0, 0, 0.26)" centered={false} />
    return (
        <Container style={startAnimation}>
            {
                pets.map((pet, index) => {
                    const petName = breedName(pet, language.value);
                    return (
                        <Card
                            key={index}
                            image={pet.images.profile}
                            name={petName}
                            handle_pet_details={() => handleGetPetName(pet, "breed", "pet")}
                        />
                    );
                })}
        </Container>
    );
};

export default Pets;