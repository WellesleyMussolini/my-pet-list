export const petFilter = (pets, search, params) => {
    if (!search) return pets;
    return pets.filter((pet) => {
        const breed = pet[params];
        const breedText = typeof breed === 'string' ? breed : breed?.en || breed?.ptBr || '';
        return breedText.toLowerCase().includes(search.toLowerCase());
    });
};