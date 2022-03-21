import { Input, InputPassword, Button } from 'components';
import { MailIcon, LockIcon } from 'assets/icons';

import * as s from './styles';

export type DataProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export type FormLoginProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  data: DataProps;
  error?: string;
};

const FormLogin = ({ onSubmit, data, error }: FormLoginProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <s.Wrapper
      aria-label="FormLogin component"
      onSubmit={(event) => handleSubmit(event)}
    >
      <s.FieldWrapper>
        <Input
          label="e-mail"
          name="email"
          type="email"
          placeholder="e-mail"
          icon={<MailIcon />}
          value={data.email}
          onChange={(event) => data.setEmail(event.target.value)}
          error={error}
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
          error={error}
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
