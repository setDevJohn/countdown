import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #000;
  };

  html {
    color: #fff;
    font-weight: 400;
    font-family: "Tangerine", cursive;
  }
`