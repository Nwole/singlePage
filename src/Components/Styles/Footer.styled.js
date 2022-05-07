import styled from "styled-components";

export const StyleFooter = styled.footer`
background-color: ${({theme}) => theme.colors.footer};
padding: 100px 0 60px;
ul{
    list-style: none;
}
ul li{
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 20px;
}
p{
    font-size:15px;
    text-align: center;
}
`