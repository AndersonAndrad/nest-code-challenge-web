import React from 'react';

// styles
import {
  Container,
  LoginContainer,
  AboutContainer,
  Input,
  LoginTitle,
  ButtonContainer,
  BarSeparetion,
} from '../styles/login.styles';

export default function Login() {
  return (
    <Container>
      <AboutContainer>
        <label>About</label>
        <label>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic
        </label>
      </AboutContainer>
      <BarSeparetion></BarSeparetion>
      <LoginContainer>
        <LoginTitle>
          <label>Login</label>
        </LoginTitle>
        <label>Email</label>
        <Input />
        <ButtonContainer>
          <button>Login</button>
        </ButtonContainer>
        <label>
          if you do not have an account enter your email, so an account will be
          created automatically, if you already have one login
        </label>
      </LoginContainer>
    </Container>
  );
}
