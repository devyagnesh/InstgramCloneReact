import React from "react";
import { Link } from "react-router-dom";
import AuthWrapper from "../AuthWrapper/AuthWrapper";
import Flex from "../../Layouts/Flex/Flex";
import styled from "styled-components";

const OptionText = styled.p`
  font-size: 1.4rem;
  color: rgb(38, 38, 38);
`;

const OptionActionLink = styled(Link)`
  font-size: 1.4rem;
  text-decoration: none;
  font-weight: 600;
  margin: 0 0 0 0.5rem;
  color: rgb(0, 149, 246);
`;

const AuthOption = (props) => {
  return (
    <AuthWrapper>
      <Flex Valign={true} Halign={true}>
        <OptionText>{props.text}</OptionText>
        <OptionActionLink to={props.to}>{props.linkText}</OptionActionLink>
      </Flex>
    </AuthWrapper>
  );
};

export default AuthOption;
