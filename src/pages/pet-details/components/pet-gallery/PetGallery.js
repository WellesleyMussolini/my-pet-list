import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Gallery = styled.div`
  /* width: 1000px;
  background-color: red;
  height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  & > img {
    width: 50em;
    object-fit: cover;
  } */

  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`;

const PetGallery = ({ images, breed }) => {

    return (
        <>
            <Gallery>
                {images.map((image, index) => (
                    <img src={image} alt={breed} key={index} />
                ))}
            </Gallery>
        </>
    );
};

export default PetGallery;