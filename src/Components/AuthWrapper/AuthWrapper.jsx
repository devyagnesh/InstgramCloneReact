import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.div`
    background: #FFF;
    width:32.5rem;
    max-width:32.5rem;
    border:.1rem solid rgb(219,219,219);
    border-radius: .2rem;
    padding:2rem;
`;

const AuthWrapper = (props) => {
  return (
    <FormWrapper>{props.children}</FormWrapper>
  )
}

export default AuthWrapper