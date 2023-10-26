import React from "react";
import styled from "styled-components";
import SliderImage from "../../assets/auth/auth_slider.png";

const SliderDiv = styled.div`
  flex-basis: 50rem;
`;

const Img = styled.img`
  width: 100%;
  max-width: 91%;
  object-fit: contain;
`;
const AuthSlider = () => {
  return (
    <SliderDiv>
      <Img src={SliderImage} alt=""/>
    </SliderDiv>
  );
};

export default AuthSlider;
