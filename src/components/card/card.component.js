import React from "react";
import { Wrapper, Image, Info } from "./card.styles";

const Card = ({ image, name, handle_pet_details }) => {
    return (
        <Wrapper className="light-beam">
            <Image image={image} />
            <Info>
                <h2>{name}</h2>
                <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                <button onClick={handle_pet_details}>Read More</button>
            </Info>
        </Wrapper>
    );
};

export default Card;