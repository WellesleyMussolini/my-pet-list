import React, { useState, useMemo } from "react";
import { useQuery } from "react-query";
import { pet } from "../../../services/pet-service";
import Input from "../../../components/input-search/Input";
import { Container, Test, Card } from "../home/home.styles";
import { pet_filter } from "../../../utils/pet.filter";
import Pets from "../components/Pets";
import Error from "../../../components/error/Error";

const Home = () => {
    const [search, setSearch] = useState("");
    const [pets, setPets] = useState([]);

    const { isLoading } = useQuery("pets", async () => await pet.get(setPets, "/pets", "data"));

    const petsFilter = useMemo(() => {
        return pet_filter(pets, search, "breed");
    }, [pets, search]);

    if (!isLoading) {
        return <Error error="Pets not found" />;
    }
    return (
        <Container>
            <Input handleSearch={(event) => setSearch(event.target.value)} />
            <Pets pets={petsFilter} Loader={isLoading} />
            {/* <Test>
                <li>
                    <Card class="card">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/20110425_German_Shepherd_Dog_8505.jpg" alt="Imagem do card" />
                            <h2>Título do card</h2>
                            <p>Descrição do card.</p>
                            <a href="#">Botão</a>
                    </Card>
                </li>
            </Test>  */}

        </Container>
    );
};

export default Home;