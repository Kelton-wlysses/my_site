import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {

    /* style guide */

      /* Color Style guide */
        /* Primary Palette */
        --color-primary: #5AE5B4;
        --color-background: #272727;

        /* Grey Scale Palette */

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343B41;
        --color-grey-1: #868E96;
        --color-grey-0: #F8F9FA;

        /* Feedback Palette */

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

      /* Text Style guide */

        /* fonte style */
        
        --font-poppins: 'Poppins';

        /* Typography */

        --font-title-1b: bold 36px var(--font-poppins);
        --font-title-2b: bold 24px var(--font-poppins);
        --font-title-3b: bold 18px var(--font-poppins);
        --font-title-4b: bold 14px var(--font-poppins);

        --font-title-1n: normal 36px var(--font-poppins);
        --font-title-2n: normal 24px var(--font-poppins);
        --font-title-3n: normal 18px var(--font-poppins);
        --font-title-4n: normal 14px var(--font-poppins);


        --font-headline: normal 12px var(--font-poppins);
        --font-headlineBold: bold 12px var(--font-poppins);
        --font-headlineItalic: italic 12px var(--font-poppins);


    font-size: 62.5%;
    
  }

  @media (min-width: 700px) {
    :root {
       font-size: 62.5%;
    }
  }
  
  * {
     margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;

    font-family: var(--font-poppins);

  }

  body,html{
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 1.6rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;







