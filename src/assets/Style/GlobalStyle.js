import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Source Sans Pro', sans-serif;
        color: #aca7a7;
    }

`;


export default GlobalStyle;