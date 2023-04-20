import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../../components/Loading/Loading";
import { pet } from "../../../services/pet-service";
import { Container, BreedVitalStats, Stats, Typography, StatsInfo, Icon, Characteristics, Characteristic, BreedCharacteristics } from "./pet.styles";
import { petStat } from "../mock/pet.mock";
import PetsIcon from '@mui/icons-material/Pets';

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

    console.log(dog.breed_characteristics)

    const formatWeight = (weight) => {
        return `${weight.kg} kg ( ${weight.pounds} lbs )`;
    }

    const categories = [
        { name: "FAMILY" },
        { name: "PHYSICAL" },
        { name: "SOCIAL" },
        { name: "HEALTH" }
    ];
    return (
        <Container>
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

            <BreedCharacteristics>
                <h1>Breed Characteristics</h1>
                {categories.map((category, index) => (
                    <div key={index}>
                        <h3>{category.name}</h3>
                        {dog.breed_characteristics[category.name].map((characteristic, index) => (
                            <Characteristics key={index}>
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
                            </Characteristics>
                        ))}
                    </div>
                ))}
            </BreedCharacteristics>
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
        </Container>
    );
};

export default Pet;