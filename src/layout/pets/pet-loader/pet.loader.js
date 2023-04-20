import React from "react";
import Pets from "../pet-list/pet.list";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";
import { Wrapper } from "./pet.loader.styles";

const Pet = ({ pets, card_amount }) => {
    return (
        <Wrapper>
            {
                pets.length === 0 ? (
                    Array.from({ length: card_amount }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))
                ) : (
                    <Pets array={pets} />
                )}
        </Wrapper>
    );
};

export default Pet;