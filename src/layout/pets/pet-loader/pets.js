import React from "react";
import styles from "./pets.module.css";
import Pets from "../pet-list/pets";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";

const Pet = ({ array, card_length }) => {
    return (
        <div className={styles.wrapper}>
            {
                array.length === 0 ? (
                    Array.from({ length: card_length }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))
                ) : (
                    <Pets array={array} />
                )}
        </div>
    );
};

export default Pet;