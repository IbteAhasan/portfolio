import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [mountedComponent, setMountedComponent] = useState(false);
  const [theme, setTheme] = useState("Light");

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === "Light" ? setMode("Dark") : setMode("Light");
  };
  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("Light");
    setMountedComponent(true);
  }, []);
  return [theme, themeToggler, mountedComponent];
};
