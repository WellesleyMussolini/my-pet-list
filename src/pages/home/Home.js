import React, { useState, useEffect, useMemo } from "react";
import { pet } from "../../services/pet-service";
import Input from "../../components/input-search/Input";
import { Container, Wrapper, LoadingCardScreen } from "./home.styles";
import { pet_filter } from "../../utils/pet.filter";
import LoadingScreen from "../../components/loading-screen/LoadingScreen";
import CardSkeleton from "../../components/card-skeleton/CardSkeleton";
import Pets from "../../layout/pets/pet-list/pet";

const DEFAULT_CARD_COUNT = 5;

const Home = () => {
    const [search, setSearch] = useState("");
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        pet.get(setPets, "/pets", "data").finally(() => {
            setIsLoading(false);
        });
    }, []);

    const petsFilter = useMemo(() => {
        return pet_filter(pets, search, "breed");
    }, [pets, search]);

    const petSkeleton = useMemo(() => {
        return Array.from({ length: DEFAULT_CARD_COUNT }).map((_, index) => (
            <CardSkeleton key={index} />
        ));
    }, []);

    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Wrapper>
                {isLoading ? (
                    <LoadingCardScreen>
                        <LoadingScreen />
                        {petSkeleton}
                    </LoadingCardScreen>
                ) : (
                    <Pets pets={petsFilter} />
                )}
            </Wrapper>
        </Container>
    );
};

export default Home;
