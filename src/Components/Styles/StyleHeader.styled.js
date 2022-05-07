import styled from "styled-components";

export const StyleHeader = styled.header`
background-color: ${({theme}) => theme.colors.header};
padding: 40px 0;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;

@media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
}
`

export const Image = styled.img`
width: 50%;
height: 50%;
margin-left: 50px;
@media(max-width: ${({theme}) => theme.mobile}) {
    margin: 40px 0 30px;
}
`

export const Logo = styled.h1`

`