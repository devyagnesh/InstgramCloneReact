import React from "react";
import styled from "styled-components";

const FooterTag = styled.footer`
  text-align: center;
  padding: 0.5rem;
`;

const FooterText = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  color: rgb(38, 38, 38);
`;

const Footer = () => {
  return (
    <FooterTag>
      <FooterText>Made With 💖 By Yagnesh</FooterText>
    </FooterTag>
  );
};

export default Footer;
