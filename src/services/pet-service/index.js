import { server } from "../axios";

export const pet = {
    get: async () => await server.get("/pets").then((response) => response.data).catch((error) => error),
    getById: async (id) => await server.get("/pets/" + id).then((response) => response.data).catch((error) => error),
};