import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Gallery = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    transition: left 0.5s ease;
    left: ${({ centerIndex, imageWidth, currentImageIndex }) => `calc(50% - ${imageWidth / 2}px - ${(currentImageIndex - centerIndex) * (imageWidth + 20)}px)`};
`;

const ImageCard = styled.div`
    width: 200px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    filter: grayscale(100%);
    transition: all 0.5s ease;
    position: relative;
    left: ${({ index, centerIndex, imageWidth }) => `${(index - centerIndex) * (imageWidth + 20)}px`};
    z-index: ${({ index, currentImageIndex }) => currentImageIndex === index ? 1 : 0};

    ${({ selected }) => selected && `
        transform: scale(1.1);
        filter: none;
        z-index: 2;
        left: 0;
    `}
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Controlls = styled.div`
    display: flex;
    flex-direction: row;
`;

const PetGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageWidth = 220;
    const centerIndex = Math.floor(images.length / 2);

    const selectImage = (index) => {
        setCurrentImageIndex(index);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <Container>
            {/* <Gallery centerIndex={centerIndex} currentImageIndex={currentImageIndex} imageWidth={imageWidth}> */}
            <Gallery>
                {images.map((image, index) => (
                    <ImageCard key={index} index={index} centerIndex={centerIndex} selected={index === currentImageIndex}>
                        <Image src={image} alt={`Pet ${index}`} />
                    </ImageCard>
                ))}
            </Gallery>
            <Controlls>
                <ArrowBackIosNewIcon onClick={() => selectImage((currentImageIndex - 1 + images.length) % images.length)} />
                <ArrowForwardIosIcon onClick={() => selectImage((currentImageIndex + 1) % images.length)} />
            </Controlls>
        </Container>
    );
}

export default PetGallery;