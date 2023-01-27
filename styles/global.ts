import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        user-select: none;
    };

    body, html {
        width: calc(100vw - (100vw - 100%));
        height: 100vh;

        background: #f9f9f9;
    }
`;
