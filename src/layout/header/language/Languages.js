import React from "react";
import { SelectStyles } from "./languages.styles";
import { languageOptions } from "./utils/languageOptions";
import { UseLanguage } from "../../../context/languageContext";

export const Languages = () => {
    const { language, setLanguage } = UseLanguage();
    const handleLanguage = (language) => setLanguage(language);

    const options = Object.keys(languageOptions).map((key) => {
        const language = languageOptions[key];
        return {
            label: language.label,
            value: language.value,
        };
    });

    return <SelectStyles options={options} onChange={handleLanguage} value={language} />;
};