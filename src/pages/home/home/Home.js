import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../../services/pet-service";
import Input from "../../../components/input-search/Input";
import { Container } from "../home/home.styles";
import { pet_filter } from "../../../utils/pet.filter";
import Pets from "../components/Pets";

const Home = () => {
    const [search, setSearch] = useState("");
    const [pets, setPets] = useState([]);

    const { isLoading } = useQuery("pets", async () => await pet.get(setPets, "/pets", "data"));

    const petsFilter = useMemo(() => {
        return pet_filter(pets, search, "breed");
    }, [pets, search]);

    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} Loader={isLoading} />
        </Container>
    );
};

export default Home;