import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #fff;
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
/* flex-direction: row-reverse; */
padding: 60px;

@media(max-width: ${({theme}) => theme.mobile}) {
    flex-direction: column;
}
`

export const Image = styled.img`
width: 80%
`
