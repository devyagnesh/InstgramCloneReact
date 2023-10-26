import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Line = styled.div`
  height: 0.1rem;
  background-color: rgb(219, 219, 219);
  flex: 1;
`;

const Text = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  color: rgb(149, 149, 149);
  font-size: 1.2rem;
`;

const OrDivider = () => {
  return (
    <DividerWrapper>
      <Line></Line>
      <Text>OR</Text>
      <Line></Line>
    </DividerWrapper>
  );
};

export default OrDivider;
