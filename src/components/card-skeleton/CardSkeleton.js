import React from "react";
import { Card, Id, Image, Name } from "./cardskeleton.styles";

const CardSkeleton = () => {
    return (
        <Card>
            <Image className="skeleton-element" />
            <Id  className="skeleton-element" />
            <Name className="skeleton-element" />
        </Card>
    );
};

export default CardSkeleton;