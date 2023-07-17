import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../services/pet-service";
import Input from "../../components/input-search/Input.component";
import { Container } from "./home.styles";
import { petFilter } from "./utils/pet.filter";
import Loader from "./components/loader/loader.component";
import Error from "../../components/error/error.component";
import Pets from "../../layout/pets/pet-list/pets.component";

const Home = () => {
    const [search, setSearch] = useState("");

    const { isLoading, data: pets, error } = useQuery("pets", pet.get);

    const petsFilter = useMemo(() => {
        return petFilter(pets, search, "breed");
    }, [pets, search]);

    if (isLoading) return <Loader />;

    if (!Array.isArray(pets) || !pets || error) return <Error message="OPS... FAILED TO CONNECT TO API!" centered={true} />;
    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} />
        </Container>
    );
};

export default Home;