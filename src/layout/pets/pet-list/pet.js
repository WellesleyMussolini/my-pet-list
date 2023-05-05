import React from "react";
import Card from "../../../components/card/Card";
import { usePetNavigate } from "../pet-navigate/pet.navigate";
import { Container } from "./pet.styled";
import { useSpring } from "react-spring";

const Pets = ({ pets }) => {
    const handleGetPetId = usePetNavigate();

    const startAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
    });
    return (
        <Container style={startAnimation}>
            {
                pets.map((pet, index) => {
                    return (
                        <Card
                            key={index}
                            image={pet.images.profile}
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