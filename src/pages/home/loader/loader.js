import React from "react";
import { Container, Wrapper, LoadingCardScreen } from "./loader.styles";
import Loading from "../../../components/loading/Loading";
import { cardSkeleton } from "../utils/card-skeleton";
import CardSkeleton from "../../../components/card-skeleton/CardSkeleton";

const card_amount = 5;

const LoadingScreen = () => {
    const petSkeleton = cardSkeleton(CardSkeleton, card_amount);
    return (
        <Container>
            <div></div>
            <Wrapper>
                <LoadingCardScreen>
                    <Loading />
                    {petSkeleton}
                </LoadingCardScreen>
            </Wrapper>
        </Container>
    );
};

export default LoadingScreen;