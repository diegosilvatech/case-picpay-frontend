import { useState } from 'react';

import { Container, FormLogin } from 'components';

import * as s from './styles';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit', { email, password });
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
          <FormLogin onSubmit={onSubmit} data={formData} />
        </s.FormWrapper>
      </Container>
    </s.Wrapper>
  );
}
