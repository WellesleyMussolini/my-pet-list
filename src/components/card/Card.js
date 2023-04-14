import React from "react";
import { Wrapper, Image, Id, Breed } from "./card.styles";
import Tooltip from '@mui/material/Tooltip';

const handleDragStart = (event) => event.preventDefault();

const Card = ({ image, image_alt, id, name, handle_pet_details }) => {
    return (
        <Wrapper onClick={handle_pet_details}>
            <Image
                src={image} alt={image_alt}
                onDragStart={handleDragStart}
                draggable={false}
            />
            <Id><span>#</span>{id}</Id>
            <Tooltip title={name}>
                <Breed>{name}</Breed>
            </Tooltip>
        </Wrapper>
    );
};

export default Card;