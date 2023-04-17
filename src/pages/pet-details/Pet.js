import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/Loading/Loading";
import { pet } from "../../services/pet-service";
import PetsIcon from '@mui/icons-material/Pets';
import HeartIcon from "../../assets/img/heart.png";

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

    const traits = [
        { name: 'Inteligência', value: 5 },
        { name: 'Agilidade', value: 4 },
        { name: 'Força', value: 4 },
        { name: 'Agressividade', value: 2 },
    ];

    return (
        <>
            <div>
                <img src={HeartIcon} />
            </div>
            <h2>BREED: {dog.breed}</h2>
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
            <div>
                {traits.map((trait, index) => (
                    <div key={index}>
                        <strong>{trait.name}</strong>
                        {[...Array(5)].map((_, index) => (
                            <PetsIcon
                                key={index}
                                color={index < trait.value ? 'primary' : 'disabled'}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </>
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