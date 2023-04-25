import React from "react";
import { petStat } from "../../mock/pet.mock";
import { Container, Icon, Stats, StatsInfo, Typography } from "./pet.stats.styles";

const PetStats = ({ petList, maleWeight, femaleWeight }) => {
    const formatWeight = (weight) => {
        return `${weight.kg} kg (${weight.pounds} lbs)`;
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
            {petStat.map((pet, index) => {
                return (
                    <Stats key={index}>
                        <Icon image={pet.icon} />
                        <Typography color="#E21D23">{pet.stat}</Typography>
                        {pet.information === 'weight' ? (
                            <StatsInfo>
                                    <p>
                                        {combinedWeight}
                                    </p>
                            </StatsInfo>
                        ) : (
                            <StatsInfo>
                                <p>{pet.information.split(".").reduce((object, index) => object[index], petList)}</p>
                            </StatsInfo>
                        )}
                    </Stats>
                )
            })}
        </Container>
    )
};

export default PetStats;