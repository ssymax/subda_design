import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`


  ${normalize}


  html {
    box-sizing: border-box;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    background-color: #fcf8f8;
    font-kerning: normal;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, span, p {
    margin: 0;
  }

  h1 {
    font-size: 2.1rem;
  }

  h2 {
    font-size: 5.4rem;
  }

  button {
    cursor: pointer;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    }
    
    `;

export default GlobalStyle;
