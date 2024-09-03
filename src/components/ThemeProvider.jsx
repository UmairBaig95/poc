// src/components/ThemeProvider.js
import React, { useState } from "react";
import { minimalistTheme, darkModeTheme, neoBrutalismTheme } from "./themes";

const themes = {
  minimalist: minimalistTheme,
  dark: darkModeTheme,
  brutal: neoBrutalismTheme,
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.minimalist);

  const switchTheme = (themeName) => {
    setTheme(themes[themeName]);
  };

  return (
    <div className={`${theme.background} ${theme.font}`}>
      <div className="p-4">
        <button
          onClick={() => switchTheme("minimalist")}
          className={theme.button}
        >
          Minimalist
        </button>
        <button onClick={() => switchTheme("dark")} className={theme.button}>
          Dark Mode
        </button>
        <button onClick={() => switchTheme("brutal")} className={theme.button}>
          Neo-Brutalism
        </button>
      </div>
      {children}
    </div>
  );
};

export default ThemeProvider;
