import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import { pet } from "../../services/pet-service";

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

    return (
        <>
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
        </>
    );
};

export default Pet;