import { createContext } from "react";


export const defaultSettings = {
    darkMode: true,
};

const GeneralContext = createContext({
    settings: defaultSettings,
    setDarkMode: () => { },
    initializeGeneralContext: () => { },
});

export default GeneralContext;

