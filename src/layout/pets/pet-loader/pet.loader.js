import React from "react";
import styles from "./pet.module.css";
import Pets from "../pet-list/pet.list";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";

const Pet = ({ array, card_amount }) => {
    return (
        <div className={styles.wrapper}>
            {
                array.length === 0 ? (
                    Array.from({ length: card_amount }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))
                ) : (
                    <Pets array={array} />
                )}
        </div>
    );
};

export default Pet;