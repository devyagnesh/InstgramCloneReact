import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";



const LoginWithFbLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  color: #385185;
  font-size: 1.4rem;
`;

const LoginWithFb = (props) => {
  return (
    <LoginWithFbLink to={props.to}>
      <AiFillFacebook style={{ fontSize: "2rem" }} /> Log in with Facebook
    </LoginWithFbLink>
  );
};

export default LoginWithFb;
