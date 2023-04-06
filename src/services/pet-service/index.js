import { server } from "../axios";

export const pet = {
    get: async (handlePets, route, data) => await server.get(route).then((response) => handlePets(response[data])).then(() => "failed"),
};