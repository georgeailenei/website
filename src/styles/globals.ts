import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #f1f1f1;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
    }

    ul {
    padding: 0;
    margin: 0;
    }

    a {
        color: #bdbdbd;
    }

    a:hover{
        color: #ffffff;
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 0;
        margin: 0;
    }
`;