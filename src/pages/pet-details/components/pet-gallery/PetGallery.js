import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
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
`;

const SlideWrapper = styled.div`
    display: flex;
    position: absolute;
    transition: transform 600ms cubic-bezier(0.25, 1, 0.35, 1);
`;

const Slider = styled.div`
    position: relative;
    height: 70vmin;
    width: 70vmin;
`;

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
            <Slider>
                <SlideWrapper style={wrapperTransform}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            onClick={() => handleSlideClick(index)}
                        />
                    ))}
                </SlideWrapper>
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
            </Slider>
        </Gallery>
    );
}

export default PetGallery;