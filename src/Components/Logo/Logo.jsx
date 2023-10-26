import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/auth/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImageTag = styled.img`
  width: 65%;
  object-fit: contain;
  padding: 2rem;
`;

const Logo = (props) => {
  return (
    <LogoWrapper>
      <LogoImageTag src={LogoImage} alt={props.alt} />
    </LogoWrapper>
  );
};

export default Logo;
