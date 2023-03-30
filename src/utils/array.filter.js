export const array_filter = (array, search, params) => {
    return !search ? array : array.filter((item) => item[params].toLowerCase().includes(search.toLowerCase()));
  };