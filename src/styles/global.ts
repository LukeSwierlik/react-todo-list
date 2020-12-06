import { createGlobalStyle } from 'styled-components';
import { settings } from './settings';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${settings.colorDark};
    font-family: ${settings.fontText};
    font-size: (${settings.baseSize} * 1.1);
    color: ${settings.colorLight};
    letter-spacing: 0.5px;
    overflow-y: scroll;
  }

  :global(.container) {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;
