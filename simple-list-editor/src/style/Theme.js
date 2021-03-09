import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    mineShaft: "#3b3939",
    gray: "#817b7b",
    white: "#ffffff",
    tundora: "#454545",
    silverChalice: "#A8A8A8",
    scorpion: "#5E5C5C",
  },
  font: "Roboto",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
