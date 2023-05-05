import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../services/pet-service";
import Input from "../../components/input-search/Input";
import { Container } from "./home.styles";
import { pet_filter } from "../../utils/pet.filter";
import LoadingScreen from "./loader/loader";
import Error from "../../components/error/Error";
import Pets from "../../layout/pets/pet-list/pet";

const Home = () => {
    const [search, setSearch] = useState("");

    const { isLoading, data: pets, error } = useQuery("pets", pet.get);

    const petsFilter = useMemo(() => {
        return pet_filter(pets, search, "breed");
    }, [pets, search]);

    if (error) return <Error message="OPS... FAILED TO CONNECT TO API!" centered={true} />

    if (!isLoading && (!pets || !pets.length)) return <Error message="NO PETS FOUND" centered={true} />

    if (isLoading) return <LoadingScreen />
    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} />
        </Container>
    );
};

export default Home;