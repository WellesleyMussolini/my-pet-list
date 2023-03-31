import React from "react";
import styles from "./card.module.css";
import Tooltip from '@mui/material/Tooltip';

const handleDragStart = (event) => event.preventDefault();

const Card = ({ image, image_alt, id, name, handle_pet_details }) => {
    return (
        <div className={styles.card} onClick={handle_pet_details}>
            <img
                src={image} alt={image_alt}
                onDragStart={handleDragStart}
                draggable={false}
            />
            <p><span>#</span>{id}</p>
            <Tooltip title={name}>
                <h5>{name}</h5>
            </Tooltip>
        </div>
    );
};

export default Card;