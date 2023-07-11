import React, { useState } from "react";
import { Container, Wrapper, TitleContainer, Characteristic, Information } from "./characteristics.styles";
import { UseLanguage } from "../../../../context/languageContext";
import { Accordion } from "../Accordion/Accordion";

const Characteristics = ({ pet }) => {
    const { language } = UseLanguage();
    const categories = [
        { key: "FAMILY", name: { en: "FAMILY", ptBr: "FAMÍLIA" } },
        { key: "PHYSICAL", name: { en: "PHYSICAL", ptBr: "ATRIBUTOS FÍSICOS" } },
        { key: "SOCIAL", name: { en: "SOCIAL", ptBr: "SOCIABILIDADE" } },
        { key: "PERSONALITY", name: { en: "PERSONALITY", ptBr: "PERSONALIDADE" } },
        { key: "HEALTH", name: { en: "HEALTH", ptBr: "SAÚDE" } }
    ];
    const title = {en: "Breed Characteristics", ptBr: "Características da Raça"};
    return (
        <Container>
            <h1>{title[language.value]}</h1>
            {categories.map((category, index) => (
                <Wrapper key={index}>
                    <TitleContainer>
                        <h3>{category.name[language.value]}</h3>
                    </TitleContainer>
                    {pet[language.value][category.key].map((characteristic, index) => (
                        <div key={index}>
                            <div>
                                <Accordion title={characteristic.characteristics} information={characteristic.information}  points={characteristic.points}/>
                            </div>
                        </div>
                    ))}
                </Wrapper>
            ))}
        </Container>
    );
};

export default Characteristics;