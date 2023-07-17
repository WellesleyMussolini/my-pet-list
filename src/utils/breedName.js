export const breedName = (pet, language) => {
    if (typeof pet.breed === 'string')  return pet.breed;
    else if (typeof pet.breed === 'object') return pet.breed[language];
};