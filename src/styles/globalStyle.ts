import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: #1a202c;
  }
`}`;

export default GlobalStyle;
