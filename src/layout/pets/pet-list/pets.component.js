import React from "react";
import Card from "../../../components/card/card.component";
import { usePetNavigate } from "../pet-navigate/pet_navigate";
import { Container } from "./pets.styles";
import Error from "../../../components/error/error.component";
import { breedName } from "../../../utils/breedName";
import { UseLanguage } from "../../../context/languageContext";
import { Themes } from "../../../themes/themes";
import { truncateStringWithDots } from "./utils/truncateStringWithDots";

const Pets = ({ pets }) => {
    const handleGetPetName = usePetNavigate();
    const { language } = UseLanguage();

    const changeLanguage = language.value;
    if (pets.length === 0) return <Error message="NO PET FOUND" color={Themes.gray} centered={false} />
    return (
        <Container>
            {
                pets.map((pet, index) => {
                    const petName = breedName(pet, changeLanguage);
                    const description = truncateStringWithDots(pet.description[changeLanguage]);
                    return (
                        <Card
                            key={index}
                            image={pet.images.profile}
                            name={petName}
                            description={description}
                            buttonText={changeLanguage === "en" ? "Read More" : "Ler mais"}
                            handle_pet_details={() => handleGetPetName(pet, "breed", "pet")}
                        />
                    );
                })}
        </Container>
    );
};

export default Pets;