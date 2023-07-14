import React from "react";
import { Container, Wrapper, LoadingCards } from "./loader.styles";
import Loading from "../../../../layout/loading/loading.component";
import { cardSkeleton } from "../../utils/card-skeleton";
import CardSkeleton from "../../../../components/card-skeleton/CardSkeleton";

const card_amount = 5;

const LoadingScreen = () => {
    const petSkeleton = cardSkeleton(CardSkeleton, card_amount);
    return (
        <Container>
            <div></div>
            <Wrapper>
                <LoadingCards>
                    <Loading />
                    {petSkeleton}
                </LoadingCards>
            </Wrapper>
        </Container>
    );
};

export default LoadingScreen;