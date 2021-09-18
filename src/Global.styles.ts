import { createGlobalStyle } from 'styled-components';

import PALETTE from 'constants/palette';

const GlobalStyle = createGlobalStyle`  
  @font-face {
    font-family: 'IBM Plex Sans KR';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url('./fonts/IBMPlexSansKR-Regular.woff2') format('woff2'),
    local('👾');
  };

  @font-face {
    font-family: 'IBM Plex Sans KR';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url('./fonts/IBMPlexSansKR-Bold.woff2') format('woff2'),
    local('👾');
  };

  html, body {
    background-color: ${PALETTE.PRIMARY_VIOLET_BG};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans KR', sans-serif;
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
