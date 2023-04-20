import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Puppies = styled.div`
  width: 1000px;
  background-color: red;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  & > img {
    width: 50em;
    object-fit: cover;
  }
`;

const Slider = styled.input`
  width: 100%;
`;

const PetGallery = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSliderChange = (event) => {
        setCurrentImageIndex(parseInt(event.target.value));
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft" && currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else if (event.key === "ArrowRight" && currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    const startIndex = Math.max(0, currentImageIndex - 1);
    const endIndex = Math.min(images.length - 1, currentImageIndex + 1);

    return (
        <>
            <Puppies>
                {images.slice(startIndex, endIndex + 1).map((image, index) => (
                    <img src={image} alt="puppy" key={startIndex + index} />
                ))}
            </Puppies>
            <Slider
                type="range"
                min="0"
                max={images.length - 1}
                value={currentImageIndex}
                onChange={handleSliderChange}
            />
        </>
    );
};

export default PetGallery;