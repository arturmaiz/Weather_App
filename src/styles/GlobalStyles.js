import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0%;
    padding: 0%;
  }

  body {
    font-family: 'Muli', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: ${props => (props.theme.mode === "dark" ? "#333" : "")};
    color: ${props => (props.theme.mode === "dark" ? "#333" : "")};
    position: relative;
    height: 100vh;
  }
  `;
