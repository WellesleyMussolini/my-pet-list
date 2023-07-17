export const petRouteName = (string) => {
    if (typeof string === "object" && string.en) return string.en.toLowerCase().replace(/\s+/g, "-");
    return string.toLowerCase().replace(/\s+/g, "-");
};
