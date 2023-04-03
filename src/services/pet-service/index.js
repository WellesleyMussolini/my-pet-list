import { api } from "../api";

export const petService = async (handlePets, route, data) => {
    return await api.get(route).then((response) => handlePets(response[data])).catch(() => {
        throw new Error("Error while trying to access the pets data");
    });
};