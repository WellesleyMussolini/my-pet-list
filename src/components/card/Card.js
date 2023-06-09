import React from "react";
import { Wrapper, Picture, Image, Id, Breed } from "./card.styles";
import Tooltip from '@mui/material/Tooltip';

const Card = ({ image, id, name, handle_pet_details }) => {
    return (
        <Wrapper onClick={handle_pet_details} className="light-beam">
            <Picture><Image image={image} /></Picture>
            <Id><span>#</span>{id}</Id>
            <Tooltip title={name}>
                <Breed>{name}</Breed>
            </Tooltip>
        </Wrapper>
    );
};

export default Card;