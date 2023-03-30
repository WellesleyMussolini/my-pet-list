import React from "react";
import styles from "./cardskeleton.module.css";

const CardSkeleton = ({
    cardHeight, cardWidth,
    imageHeight, imageWidth,
    textHeight, textWidth, alignSelf,
    nameHeight, nameWidth,
}) => {
    return (
        <div
            className={`${styles.card}`}
            style={{ height: cardHeight, width: cardWidth }}>
            <div className={`${styles.image} ${styles.skeleton}`}
                style={{ height: imageHeight, width: imageWidth }}></div>
            <div className={`${styles.id} ${styles.skeleton}`}
                style={{ height: textHeight, width: textWidth, alignSelf: alignSelf }}></div>
            <div className={`${styles.name} ${styles.skeleton}`}
                style={{ height: nameHeight, width: nameWidth }}></div>
        </div>
    );
};

export default CardSkeleton;