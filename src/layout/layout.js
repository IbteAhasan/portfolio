import React, { useEffect, useState } from "react";
import Theme from "../styles/theme";
import Navbar from "../components/navbar";
import { Wrapper } from "../styles/globalStyles";
import Footer from "../components/footer";
import NewsLetter from "../components/newsletter";
import LoadingBar from "react-top-loading-bar";
import Light from "../themes/default";
import Dark from "../themes/dark";
import { useDarkMode } from "../components/hooks/useDarkMode";
export default function Layout({ children }) {
  const [progress, setProgress] = useState(30);
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "Light" ? Light : Dark;
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), "250");
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <main>
      <Theme themeMode={themeMode}>
        <Wrapper>
          <LoadingBar
            color="#ED75CC"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Navbar themeToggler={themeToggler} theme={theme}/>
          {children}
          <NewsLetter />
          <Footer />
        </Wrapper>
      </Theme>
    </main>
  );
}
