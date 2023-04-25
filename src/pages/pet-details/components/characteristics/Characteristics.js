import React from "react";
import { Characteristic, Container } from "./characteristics.styles";
import PetsIcon from '@mui/icons-material/Pets';

const Characteristics = ({ pet }) => {
    const categories = [
        { name: "FAMILY" },
        { name: "PHYSICAL" },
        { name: "SOCIAL" },
        { name: "HEALTH" }
    ];
    return (
        <Container>
            <h1>Breed Characteristics</h1>
            {categories.map((category, index) => (
                <div key={index}>
                    <h3>{category.name}</h3>
                    {pet[category.name].map((characteristic, index) => (
                        <Characteristic key={index}>
                            <h4>
                                <strong>{characteristic.characteristics}</strong>
                            </h4>
                            <div>
                                {[...Array(5)].map((_, index) => (
                                    <PetsIcon
                                        key={index}
                                        color={index < characteristic.points ? "primary" : "disabled"}
                                    />
                                ))}
                            </div>
                        </Characteristic>
                    ))}
                </div>
            ))}
        </Container>
    )
};

export default Characteristics;