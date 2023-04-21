import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./pet.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Gallery = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 50em;
    width: 80em;
    overflow: hidden;
    background: red;
`;

const Image = styled.img`
    width: 50em;
    object-fit: contain;
`;

const Controlls = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    position: absolute;
    top: calc(100% + 1em);
    width: 100%;
    gap: 30px;
    & > svg{
        font-size: 2em;
        cursor: pointer;
    }
`;

const Slide = ({ slide, handleSlideClick }) => {
    return (
        <Image src={slide.image} onClick={() => handleSlideClick(slide.index)} />
    );
};

const PetGallery = (props) => {
    const [current, setCurrent] = useState(0);

    const handlePreviousClick = () => {
        const previous = current - 1;
        setCurrent(previous < 0 ? props.images.length - 1 : previous);
    }

    const handleNextClick = () => {
        const next = current + 1;
        setCurrent(next === props.images.length ? 0 : next);
    }

    const handleSlideClick = (index) => {
        if (current !== index) setCurrent(index);
    }

    const { images } = props;
    const wrapperTransform = {
        transform: `translateX(-${current * (100 / images.length)}%)`,
    };

    return (
        <Gallery>
            <div className="slider">
                <div
                    className="slider__wrapper"
                    style={wrapperTransform}
                >
                    {images.map((image, index) => {
                        return (
                            <Slide
                                key={index}
                                slide={{ image: image, index: index }}
                                handleSlideClick={handleSlideClick}
                            />
                        );
                    })}
                </div>
                <Controlls>
                    <ArrowBackIosNewIcon
                        type="previous"
                        title="Go to previous slide"
                        onClick={handlePreviousClick}
                    />
                    <ArrowForwardIosIcon
                        type="next"
                        title="Go to next slide"
                        onClick={handleNextClick}
                    />
                </Controlls>
            </div>

        </Gallery>
    );
}

export default PetGallery;