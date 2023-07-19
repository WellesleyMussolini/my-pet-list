import React from "react";
import { Card, Id, Image, Name } from "./cardskeleton.styles";

const CardSkeleton = () => {
    return (
        <Card>
            <Image className="light-beam" />
            <Id className="light-beam" />
            <Name className="light-beam" />
        </Card>
    );
};

export default CardSkeleton;