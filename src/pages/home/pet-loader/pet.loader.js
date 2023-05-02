import React, { useState, useEffect } from "react";
import { Wrapper, LoadingCardScreen } from "./pet.loader.styles";
import Loading from "../../../components/loading/Loading";
import { cardSkeleton } from "../utils/card-skeleton";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";
import PetsList from "../pet-not-found/pet.not.found";

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
                <PetsList pets={pets} />
            )}
        </Wrapper>
    );
};

export default Pets;