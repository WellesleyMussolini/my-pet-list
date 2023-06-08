import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../services/pet-service";
import Input from "../../components/input-search/Input";
import { Container } from "./home.styles";
import { petFilter } from "./utils/pet.filter";
import LoadingScreen from "./components/loader/loader";
import Error from "../../components/error/Error";
import Pets from "../../layout/pets/pet-list/pet";

const Home = () => {
    const [search, setSearch] = useState("");

    const { isLoading, data: pets, error } = useQuery("pets", pet.get);

    const petsFilter = useMemo(() => {
        return petFilter(pets, search, "breed");
    }, [pets, search]);

    if (isLoading) return <LoadingScreen />;

    if (!Array.isArray(pets) || !pets || error) {
        return <Error message="OPS... FAILED TO CONNECT TO API!" centered={true} />;
    }
    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} />
        </Container>
    );
};

export default Home;