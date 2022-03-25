import { useContext } from 'react';

import { AuthContext } from 'contexts';

import { Container, Logo, Form } from 'components';

import * as s from './styles';

type FormDataProps = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { login } = useContext(AuthContext);

  const onSubmit = (formData: FormDataProps) => {
    const { email, password } = formData;
    login(email, password);
  };

  return (
    <s.Wrapper>
      <Container>
        <s.FormWrapper>
          <s.LogoWrapper>
            <Logo />
          </s.LogoWrapper>
          <Form.FormLogin onSubmit={onSubmit} />
        </s.FormWrapper>
      </Container>
    </s.Wrapper>
  );
}
