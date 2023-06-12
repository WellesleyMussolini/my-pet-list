import React from "react";
import { languageOptions } from "../layout/header/language/utils/languageOptions";

const Context = React.createContext();

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = React.useState(languageOptions.english);
    return <Context.Provider value={{ language, setLanguage }}>{children}</Context.Provider>
}

export const UseLanguage = () => {
    const context = React.useContext(Context);
    const { language, setLanguage } = context;
    return { language, setLanguage };
}