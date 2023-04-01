import { api } from "../api";

export const petService = async (handlePets, route, data) => {
    return await api.get(route).then((response) => handlePets(response[data])).catch((error) => console.log(error));
};