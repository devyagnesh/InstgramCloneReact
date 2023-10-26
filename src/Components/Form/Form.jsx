import React from "react";
import styled from "styled-components";

const IgForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;
const Form = (props) => {
  return <IgForm {...props}>{props.children}</IgForm>;
};

export default Form;
