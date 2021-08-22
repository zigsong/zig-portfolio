import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  @import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Medium.woff');

  html, body {
    overflow: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBMPlexSansKR', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  button {
    background: transparent;
    outline: none;
  }

  input, textarea {
    outline: none;
  }
`;

export default GlobalStyle;
