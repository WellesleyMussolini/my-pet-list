import React from "react";
import { SelectStyles } from "./languages.styles";
import { languageOptions } from "./utils/languageOptions";

export const Languages = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState(languageOptions[0]);
    const handleLanguage = (language) => setSelectedLanguage(language);

    return <SelectStyles options={languageOptions} onChange={handleLanguage} value={selectedLanguage} />;
};