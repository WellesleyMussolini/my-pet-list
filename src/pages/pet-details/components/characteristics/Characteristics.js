import React from "react";
import { Container, Wrapper, TitleContainer, Characteristic, Information } from "./characteristics.styles";
import PetsIcon from '@mui/icons-material/Pets';

const Characteristics = ({ pet }) => {
    const categories = [
        { name: "FAMILY" },
        { name: "PHYSICAL" },
        { name: "SOCIAL" },
        { name: "PERSONALITY" },
        { name: "HEALTH" }
    ];
    return (
        <Container>
            <h1>Breed Characteristics</h1>
            {categories.map((category, index) => (
                <Wrapper key={index}>
                    <TitleContainer>
                        <h3>{category.name}</h3>
                    </TitleContainer>
                    {pet[category.name].map((characteristic, index) => (
                        <div key={index}>
                            <Characteristic>
                                <p>{characteristic.characteristics}</p>
                                <div>
                                    {
                                        [...Array(5)].map((_, index) => (
                                            <PetsIcon
                                                key={index}
                                                style={{ color: index < characteristic.points ? "rgb(36, 169, 251)" : "rgba(0, 0, 0, 0.26)" }}
                                            />
                                        ))
                                    }
                                </div>
                            </Characteristic>
                        </div>
                    ))}
                </Wrapper>
            ))}
        </Container>
    )
};

export default Characteristics;