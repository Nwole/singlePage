import styled from "styled-components";

export const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px (0, 0, 0 0.15);
cursor: pointer;
font-size: 20px;
font-weight: bold;
padding: 10px 30px;
color: black;
background-color: ${({bg}) => bg || 'gray'};
color: ${({color}) => color || 'black'};
&:hover {
    opacity: 0.9;
    /* background-color: rgba(0, 0, 0, 0.5); */
    transition: scale(0.98);
}

`