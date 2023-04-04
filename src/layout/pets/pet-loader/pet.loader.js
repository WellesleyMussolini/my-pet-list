import React from "react";
import styles from "./pet.module.css";
import Pets from "../pet-list/pet.list";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";
import DogLoader from "../../../components/loading-screen/LoadingScreen";

const Pet = ({ pets, card_amount }) => {
    return (
        <div className={styles.wrapper}>
            {
                pets.length === 0 ? (
                    Array.from({ length: card_amount }).map((_, index) => (
                        <>
                            <DogLoader />
                            <CardSkeleton key={index} />
                        </>
                    ))
                ) : (
                    <Pets array={pets} />
                )}
        </div>
    );
};

export default Pet;