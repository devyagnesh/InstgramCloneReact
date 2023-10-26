import React, { forwardRef, useReducer, useState } from "react";
import styled from "styled-components";

const FormGroup = styled.div`
  flex-grow: 1;
  border-radius: 0.3rem;
  border: 0.1rem solid rgb(219, 219, 219);
  background-color: rgb(250, 250, 250);
  position: relative !important;
  padding: 1.3rem 0;

  &:focus-within {
    border: 0.1rem solid rgb(38, 38, 38);
  }
`;

const InputWrapper = styled.label`
  padding: 0 1rem;
`;

const PlaceHolderText = styled.span`
  transition: 0.1s ease;
  color: rgb(149, 149, 149);
  font-size: ${(props) => (props.hasValue ? "1rem" : "1.2rem")};
  position: absolute;
  top: ${(props) => (props.hasValue ? "2%" : "50%")};
  left: 0;
  transform: ${(props) =>
    props.hasValue ? "translateY(0%)" : "translateY(-50%)"};
  padding: 0 1rem;
`;

const FormInput = styled.input`
  position: absolute;
  ${(props) => (props.hasValue ? "bottom:0;" : "top:50%;")};
  left: 0;
  transform: ${(props) =>
    props.hasValue ? "translateY(-30%)" : "translateY(-70%)"};
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 1rem 1rem 0 1rem;
  caret-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-weight: 400;
  font-size: ${(props) =>
    props.hasValue ? "1.2rem !important" : "1.4rem !important"};
`;

const ShowPasswordBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
  text-transform: uppercase;
  color: rgb(38, 38, 38);
  font-weight: 500;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Input = forwardRef((props, ref) => {
  return (
    <FormGroup>
      <InputWrapper htmlFor="username">
        <PlaceHolderText hasValue={props.hasValue}>
          {props.placeholder}
        </PlaceHolderText>
        <FormInput
          ref={ref}
          type={props.type}
          name={props.id}
          id={props.id}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          hasValue={props.hasValue}
        />
      </InputWrapper>

      <InputIconWrapper>
        <div>{props.errorIcon}</div>
        {props.originalType === "password" && props.hasValue && (
          <ShowPasswordBtn type="button" onClick={props.onClick}>
            {!props.isPasswordShown ? "show" : "hide"}
          </ShowPasswordBtn>
        )}
      </InputIconWrapper>
    </FormGroup>
  );
});

export default Input;
