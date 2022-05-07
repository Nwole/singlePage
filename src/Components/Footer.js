import React from "react";
import { Container } from "./Styles/Container.styled";
import { Flex } from "./Styles/Flex.styled";
import { StyleFooter } from "./Styles/Footer.styled";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <StyleFooter>
      <Container>
        <Flex>
            <ul>
                <li>
                "On the other hand, we denounce with righteous indignation and dislike men who are so 
                beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire,
                 that they cannot foresee the pain and trouble that are bound to ensue; and equal blame
                </li>
                <li>+1-222-444-7777</li>
                <li>example@huddle.com</li>
            </ul>
            <ul>
                <li>About Us</li>
                <li>What We Do</li>
                <li>FAQ</li>
            </ul>
            <ul>
                <li>Carreer</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
            <SocialIcons />
        </Flex>
        <p>&Copy; 2021 All rights reserved</p>
      </Container>
    </StyleFooter>
  );
};

export default Footer;
