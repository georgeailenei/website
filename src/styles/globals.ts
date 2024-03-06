import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* declare CSS variables here */
    }

    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #f1f1f1;
    }

    a {
        color: #bdbdbd;
    }

    a:hover{
        color: #ffffff;
    }

`;

export const StyledContainer = styled.div`
  max-width: 1024px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid red;
  position: relative;
`;
