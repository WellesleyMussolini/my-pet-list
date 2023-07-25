import React from "react";
import { Wrapper, Image, Info } from "./card.styles";

const Card = ({ image, name, description, handle_pet_details, buttonText }) => {
    return (
        <Wrapper className="light-beam">
            <Image image={image} />
            <Info>
                <h2>{name}</h2>
                {/* <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p> */}
                <p>{description}</p>
                <button onClick={handle_pet_details}>{buttonText}</button>
            </Info>
        </Wrapper>
    );
};

export default Card;