import { InputText, InputPassword, Button } from 'components';
import { MailIcon, LockIcon } from 'assets/icons';

import * as s from './styles';
import React from 'react';

export type FormLoginProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const FormLogin = ({ onSubmit }: FormLoginProps) => {
  return (
    <s.Wrapper aria-label="FormLogin component" onSubmit={onSubmit}>
      <s.FieldWrapper>
        <InputText
          label="e-mail"
          name="email"
          placeholder="e-mail"
          icon={<MailIcon />}
        />
      </s.FieldWrapper>
      <s.FieldWrapper>
        <InputPassword
          label="password"
          name="password"
          placeholder="password"
          icon={<LockIcon />}
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
