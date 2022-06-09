import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("Light");
  
const setMode=(mode)=>{
    setTheme(mode)
    window.localStorage.setItem('theme',mode)
}
  const themeToggler = () => {
    theme === "Light" ? setMode("Dark") : setMode("Light");
  };
  useEffect(() => {
    let localtheme=window.localStorage.getItem('theme')
    localtheme&&setTheme(localtheme)
  }, []);
  return [theme,themeToggler]
};
