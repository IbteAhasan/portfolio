import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./globals";
const Theme = ({ children, themeMode }) => {
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
export default Theme;
