export const truncateStringWithDots = string => {
    const maxLength = 80;
    const result = string.length <= maxLength ? string : string.slice(0, maxLength - 3) + "...";
    return result;
};