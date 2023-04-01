import { api } from "../api";

export const petService = async (handlePets) => {
    return await api.get("/").then((response) => handlePets(response.data)).catch((error) => console.log(error));
};