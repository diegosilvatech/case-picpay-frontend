import { useState, useContext } from 'react';

import { AuthContext } from 'contexts';

import { Container, LoginForm, Logo } from 'components';

import * as s from './styles';

export default function LoginPage() {
  const { login, errorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      login(email, password);
    }
  };

  const formData = {
    email,
    setEmail,
    password,
    setPassword
  };
  return (
    <s.Wrapper>
      <Container>
        <s.FormWrapper>
          <s.LogoWrapper>
            <Logo />
          </s.LogoWrapper>
          <LoginForm onSubmit={onSubmit} data={formData} error={errorMessage} />
        </s.FormWrapper>
      </Container>
    </s.Wrapper>
  );
}
