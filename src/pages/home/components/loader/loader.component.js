import React from "react";
import { Container, Wrapper, LoadingCards, Silhouette } from "./loader.styles";
import Loading from "../../../../components/loading/loading.component";
import { cardSkeleton } from "../../utils/card-skeleton";
import CardSkeleton from "../../../../components/card-skeleton/CardSkeleton";

const card_amount = 5;

const Loader = () => {
    const petSkeleton = cardSkeleton(CardSkeleton, card_amount);
    return (
        <Container>
            <Silhouette />
            <Wrapper>
                <LoadingCards>
                    <Loading />
                    {petSkeleton}
                </LoadingCards>
            </Wrapper>
        </Container>
    );
};

export default Loader;