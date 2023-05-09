export const petFilter = (pets, search, params) => {
    return !search ? pets : pets.filter((pet) => pet[params].toLowerCase().includes(search.toLowerCase()));
}