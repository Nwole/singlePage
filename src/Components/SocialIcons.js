import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyleSocialIcons } from "./Styles/SocialIcons.styled";

const SocialIcons = () => {
  return (
    <StyleSocialIcons>
      <li>
        <a href="https://Twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        

        <a href="https://Facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>

        <a href="https://LinkedIn.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

      </li>
    </StyleSocialIcons>
  );
};

export default SocialIcons;
