import React from "react";
import { Wrapper, LoadingCardScreen } from "./pets.styles";
import Loading from "../../../../components/Loading/Loading";
import { cardSkeleton } from "../../utils/card-skeleton";
import PetList from "../../../../layout/pets/pet-list/pet";
import CardSkeleton from "../../../../components/card-skeleton/CardSkeleton";

const card_amount = 5;

const Pets = ({ pets, Loader }) => {
    const petSkeleton = cardSkeleton(CardSkeleton, card_amount);
    return (
        <Wrapper>
            {!Loader ? (
                <LoadingCardScreen>
                    <Loading />
                    {petSkeleton}
                </LoadingCardScreen>
            ) : (
                <PetList pets={pets} />
            )}
        </Wrapper>
    );
};

export default Pets;