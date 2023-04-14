import React from "react";
import { Card, Id, Image, Name } from "./cardskeleton.styles";

const CardSkeleton = () => {
    return (
        <Card>
            <Image />
            <Id />
            <Name />
        </Card>
    );
};

export default CardSkeleton;