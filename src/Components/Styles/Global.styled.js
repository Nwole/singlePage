import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    background-color: ${({theme}) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Poppins' sans-serif;
    font-size: 1.15;
    margin: 0;
}
p{
    opacity: 0.6;
    line-height: 2;
}
img{
    max-width: 100%;
}
`