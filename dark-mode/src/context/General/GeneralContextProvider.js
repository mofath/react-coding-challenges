import React, { useState, useEffect, useCallback } from "react";
import GeneralContext, { defaultSettings } from "./GeneralContext";

const GeneralContextProvider = (props) => {
  const [settings, setSettings] = useState(defaultSettings);

  // Save to localStorage whenever there is a change
  useEffect(() => localStorage.setItem("settings", JSON.stringify(settings)), [
    settings,
  ]);

  const initializeGeneralContext = useCallback(() => {
    const settingsData = localStorage.getItem("settings");
    const storedSettings = settingsData
      ? JSON.parse(settingsData)
      : defaultSettings;
    setSettings(storedSettings);
    setDarkMode(storedSettings.darkMode);
  }, []);

  const setDarkMode = (darkMode = defaultSettings.darkMode) => {
    darkMode
      ? document.documentElement.classList.add("dark-mode")
      : document.documentElement.classList.remove("dark-mode");
    setSettings((currentSettings) => {
      return { ...currentSettings, darkMode };
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        initializeGeneralContext,
        setDarkMode,
        settings,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
