import React from "react";
import Card from "../../../components/card/Card";
import { usePetNavigate } from "../pet-navigate/pet.navigate";
import { Container } from "./pet.styled";

const Pets = ({ pets }) => {
    const handleGetPetId = usePetNavigate();
    return (
        <Container>
            {
                pets.map((pet, index) => {
                    return (
                        <Card
                            key={index}
                            image={pet.images[0].profile}
                            image_alt={pet.breed}
                            id={pet._id}
                            name={pet.breed}
                            handle_pet_details={() => handleGetPetId(pet, "breed", "pet")}
                        />
                    );
                })}
        </Container>
    );
};

export default Pets;