import React from "react";
import { Wrapper, LoadingCardScreen } from "../home/home.styles";
import LoadingScreen from "../../../components/loading-screen/LoadingScreen";
import { cardSkeleton } from "../utils/card-skeleton";
import PetList from "../../../layout/pets/pet-list/pet";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";

const card_amount = 5;

const Pets = ({ pets, Loader }) => {
    const petSkeleton = cardSkeleton(CardSkeleton, card_amount);
    return (
        <Wrapper>
            {Loader ? (
                <LoadingCardScreen>
                    <LoadingScreen />
                    {petSkeleton}
                </LoadingCardScreen>
            ) : (
                <PetList pets={pets} />
            )}
        </Wrapper>
    );
};

export default Pets;