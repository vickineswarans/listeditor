import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
    color: ${theme.colors.white};
  }

  h1 {
    margin: 0px;
  }
`}


`;

export default GlobalStyle;
