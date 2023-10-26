import React, { forwardRef } from "react";
import styled from "styled-components";

const IgButton = styled.button`
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
  border: none;
  outline: none;
  background-color: rgb(0, 149, 246);
  color: #fff;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;

  &:disabled{
    opacity: .6;
    cursor: inherit;
  }
`;

const Button = forwardRef((props,ref) => {
  return <IgButton ref={ref} {...props}>{props.children}</IgButton>;
});

export default Button;
