import React, { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../../services/pet-service";
import Input from "../../../components/input-search/Input";
import { Container } from "./home.styles";
import { pet_filter } from "../../../utils/pet.filter";
import Pets from "../pet-loader/Pets";
import Error from "../../../components/error/Error";

const Home = () => {
    const [search, setSearch] = useState("");

    const { isLoading, data: pets } = useQuery("pets", async () => await pet.get());

    const petsFilter = useMemo(() => {
        return pet_filter(pets, search, "breed");
    }, [pets, search]);


    if (!isLoading && (!pets || !Array.isArray(pets) || pets.length === 0)) {
        return <Error error="PETS NOT FOUND" />;
    }
 

    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} Loader={!isLoading} />
        </Container>
    );
};

export default Home;
