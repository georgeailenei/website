import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --main-bg-color: #0b122c;
        --text-color: #f6f6fb;
        --text-secondary-color: #b1b9c8;
        --button-color: #f75e2e;
    }

    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--main-bg-color);
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--text-color);
        font-weight: 600;
    }
    

    a {
        text-decoration: none;
        color: var(--text-color);
        font-size: 16px;
        font-weight: 200;
    }

    p {
        color: var(--text-color);
        font-size: 16px;
        font-weight: 200;
        letter-spacing: 1px;
    }

    span {
        font-size: 14px;
        font-weight: 200;
    }
`;

export const StyledContainer = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  /* border: 1px solid red; */
`;
