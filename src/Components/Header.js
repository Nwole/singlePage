import React from "react";
import { Container } from "./Styles/Container.styled";
import { StyleHeader, Nav, Logo } from "./Styles/StyleHeader.styled";
import { Button } from "./Styles/Button.styled";
import { Flex } from "./Styles/Flex.styled";
import { Image } from "./Styles/StyleHeader.styled";

const Header = () => {
  return (
    <StyleHeader bg="red">
      <Container>
        <Nav>
          <Logo>Huddle</Logo>
          <Button>Try it free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine disscusion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for free
            </Button>
          </div>
          <Image src=".\images\illustration-flowing-conversation.svg" />
        </Flex>
      </Container>
    </StyleHeader>
  );
};

export default Header;
