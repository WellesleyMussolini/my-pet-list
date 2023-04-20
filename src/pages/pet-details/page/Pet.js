import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/Loading/Loading";
import { pet } from "../../../services/pet-service";
import { Container, BreedVitalStats, Stats, Typography, Wrapper, StatsInfo, Icon } from "./pet.styles";
import { petStat } from "../mock/pet.mock";

const Pet = () => {
    const { id } = useParams();
    const [dog, setDog] = useState(null);

    useEffect(() => {
        pet.get(setDog, `/pets/${id}`, "data");
        return;
    }, [id]);

    if (!dog) {
        return <LoadingScreen />
    }

    console.log(dog.weight)

    const formatWeight = (weight) => {
        return `${weight.kg} kg ( ${weight.pounds} lbs )`;
    }

    return (
        <Container>
            <Wrapper>
                <h2>BREED: {dog.breed}</h2>
                <BreedVitalStats>
                    {petStat.map((pet, index) => {
                        return (
                            <Stats key={index}>
                                <Icon image={pet.icon} />
                                <Typography>{pet.stat}</Typography>
                                {pet.information === 'weight' ? (
                                    <StatsInfo>
                                        <Typography color="gray">Male</Typography>
                                        <p>
                                            {formatWeight(dog.weight.male)}
                                        </p>
                                        <Typography color="gray">Female</Typography>
                                        <p>
                                            {formatWeight(dog.weight.female)}
                                        </p>
                                    </StatsInfo>
                                ) : (
                                    <StatsInfo>
                                        <p>{pet.information.split(".").reduce((object, index) => object[index], dog)}</p>
                                    </StatsInfo>
                                )}
                            </Stats>
                        )
                    })}
                </BreedVitalStats>
                <h1>Breed Characteristics</h1>
                <div>
                    
                </div>
            </Wrapper>
            {/* 
                <h1>PUPPIES</h1>
                <div>
                    {dog.images[1].puppies.map((image, index) => (
                        <img src={image} alt="puppy" key={index} />
                    ))}
                </div>
                
                <h1>ADULT HOOD</h1>
                <div>
                    {dog.images.map((image, index) => (
                        <img src={image} alt="ADULT" key={index} />
                    ))}
                </div>
                */}
        </Container>
    );
};

export default Pet;



/*
import PetsIcon from '@mui/icons-material/Pets';


const Pet = () => {
    const traits = [
        { name: 'Inteligência', value: 5 },
        { name: 'Agilidade', value: 4 },
        { name: 'Força', value: 4 },
        { name: 'Agressividade', value: 2 },
    ];
     return (
            <div>
                <h2>Border Collie</h2>
                {traits.map((trait, index) => (
                    <div key={index}>
                        <strong>{trait.name}:</strong>
                        {[...Array(5)].map((_, i) => (
                            <PetsIcon
                                key={i}
                                color={i < trait.value ? 'primary' : 'disabled'}
                            />
                        ))}
                    </div>
                ))}
            </div>
                );
};

export default Pet;
*/