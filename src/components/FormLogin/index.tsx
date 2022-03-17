import { InputText, InputPassword, Button } from 'components';
import { MailIcon, LockIcon } from 'assets/icons';

import * as s from './styles';
import React from 'react';

export type DataProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export type FormLoginProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  data: DataProps;
};

const FormLogin = ({ onSubmit, data }: FormLoginProps) => {
  console.log(data);
  return (
    <s.Wrapper aria-label="FormLogin component" onSubmit={onSubmit}>
      <s.FieldWrapper>
        <InputText
          label="e-mail"
          name="email"
          type="email"
          placeholder="e-mail"
          icon={<MailIcon />}
          value={data.email}
          onChange={(event) => data.setEmail(event.target.value)}
        />
      </s.FieldWrapper>
      <s.FieldWrapper>
        <InputPassword
          label="password"
          name="password"
          placeholder="password"
          icon={<LockIcon />}
          value={data.password}
          onChange={(event) => data.setPassword(event.target.value)}
        />
      </s.FieldWrapper>
      <s.ButtonWrapper>
        <Button type="submit" fullWidth>
          entrar
        </Button>
      </s.ButtonWrapper>
    </s.Wrapper>
  );
};

export default FormLogin;
