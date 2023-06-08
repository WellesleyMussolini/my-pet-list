import React from "react";
import { petStat } from "../../mock/pet.mock";
import { Container, Icon, Info, Stats, Typography } from "./overview.styles";
import { breed_average_weight } from "../../utils/average.weight";
import { UseLanguage } from "../../../../context/languageContext"

const Overview = ({ petList, maleWeight, femaleWeight }) => {
    const combinedWeight = breed_average_weight(femaleWeight, maleWeight);
    const { language } = UseLanguage();
    return (
        <Container>
            {
                petStat.map((pet, index) => {
                    return (
                        <Stats key={index}>
                            <Icon image={pet.icon} />
                            <Typography color="rgb(0, 131, 212)">{pet.stat[language.value]}</Typography>
                            {
                                pet.information === "weight" ? (
                                    <Info>{combinedWeight}</Info>
                                ) : (
                                    <Info>{pet.information.split(".").reduce((object, index) => object[index][language.value], petList)}</Info>
                                )
                            }
                        </Stats>
                    )
                })
            }
        </Container>
    )
};

export default Overview;