import React, { useState, useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Controlls, Gallery, Images } from "./pet.gallery.styles";

const PetGallery = ({ images }) => {
    return (
        <Container>
            <Gallery>
                {images.map((image, index) => (
                    <Images src={image} alt={`Pet ${index}`} />
                ))}
            </Gallery>
            <Controlls>
                <ArrowBackIosNewIcon />
                <ArrowForwardIosIcon />
            </Controlls>
        </Container>
    );
}

export default PetGallery;