import React from "react";
import { Brazil } from "../svg/brazil.svg";
import { USA } from "../svg/usa.svg";
import { SelectStyles } from "./languages.styles";

const languages = [
    { label: <USA />, value: "usa" },
    { label: <Brazil />, value: "br" }
];

export const Languages = () => {
    const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
    const handleLanguage = (language) => setSelectedLanguage(language);

    return <SelectStyles options={languages} onChange={handleLanguage} value={selectedLanguage} />;
};