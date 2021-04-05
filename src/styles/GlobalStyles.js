import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  a {
  color: rgba(0, 0, 0, 0.9);
  text-decoration: none;
  background-color: transparent;
  padding: 10px;
  font-size: 1.5rem;
}


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 15px;
  }
  html {
    scrollbar-width: auto;
    scrollbar-color: var(--black) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--black) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

`;

export default GlobalStyles;
