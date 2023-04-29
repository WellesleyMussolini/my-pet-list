import React from "react";
import { petStat } from "../../mock/pet.mock";
import { Container, Icon, Info, Stats, Typography } from "./overview.styles";

const Overview = ({ petList, maleWeight, femaleWeight }) => {
    const formatWeight = (weight) => {
        return `${weight.kg} kg`;
    }
    const combineWeight = (femaleWeight, maleWeight) => {
        const minFemale = femaleWeight.kg.substring(0, 2);
        const maxMale = maleWeight.kg.substring(2);
        const minFemaleLbs = femaleWeight.pounds.substring(0, 2);
        const maxMaleLbs = maleWeight.pounds.substring(2);

        const combined = {
            kg: `${minFemale}${maxMale}`,
            pounds: `${minFemaleLbs}${maxMaleLbs}`,
        };

        return formatWeight(combined);
    };

    const combinedWeight = combineWeight(femaleWeight, maleWeight);
    console.log(combinedWeight)
    return (
        <Container>
            {
                petStat.map((pet, index) => {
                    return (
                        <Stats key={index}>
                            <Icon image={pet.icon} />
                            <Typography color="rgb(0, 131, 212)">{pet.stat}</Typography>
                            {pet.information === "weight" ? (
                                <Info>{combinedWeight}</Info>
                            ) : (
                                <Info>{pet.information.split(".").reduce((object, index) => object[index], petList)}</Info>
                            )}
                        </Stats>
                    )
                })
            }
        </Container>
    )
};

export default Overview;