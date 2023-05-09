import React from "react";
import Card from "../../../components/card/Card";
import { usePetNavigate } from "../pet-navigate/pet.navigate";
import { Container } from "./pet.styled";
import { useSpring } from "react-spring";
import Error from "../../../components/error/Error";

const Pets = ({ pets }) => {
    const handleGetPetId = usePetNavigate();

    const startAnimation = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(0px)" },
    });

    if (pets.length === 0) return <Error message="NO PET FOUND" color="rgba(0, 0, 0, 0.26)" centered={false} />
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