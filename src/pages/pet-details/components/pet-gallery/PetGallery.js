import React, { useState, useEffect, useRef } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Controlls, Gallery, Images } from "./pet.gallery.styles";

const PetGallery = ({ images }) => {
    const petSlider = useRef(null);
    console.log(petSlider);

    const prevPicture = (event) => {
        event.preventDefault(); 
        petSlider.current.scrollLeft -= petSlider.current.offsetWidth;

    };

    const nextPicture = (event) => {
        event.preventDefault(); 
        petSlider.current.scrollLeft += petSlider.current.offsetWidth;
    };
    return (
        <Container>
            <Gallery ref={petSlider}>
                {images.map((image, index) => (
                    <Images src={image} alt={`Pet ${index}`} />
                ))}
            </Gallery>
            <Controlls>
                <ArrowBackIosNewIcon onClick={prevPicture} />
                <ArrowForwardIosIcon onClick={nextPicture} />
            </Controlls>
        </Container>
    );
}

export default PetGallery;