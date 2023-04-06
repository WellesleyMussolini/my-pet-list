export const pet_filter = (pets, search, params) => {
    return !search ? pets : pets.filter((pet) => pet[params].toLowerCase().includes(search.toLowerCase()));
}