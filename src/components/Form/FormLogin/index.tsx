import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginValidationSchema } from 'core/validations/login';

import { Field, Button } from 'components';

import * as s from './styles';

type FormDataProps = {
  email: string;
  password: string;
};

export type FormLoginProps = {
  onSubmit: (formData: FormDataProps) => void;
};

export default function FormLogin({ onSubmit }: FormLoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(loginValidationSchema)
  });

  const _onSubmit: SubmitHandler<FormDataProps> = (formData) => {
    onSubmit(formData);
  };
  return (
    <s.Wrapper
      aria-label="FormLogin component"
      onSubmit={handleSubmit(_onSubmit)}
    >
      <Field.FieldText
        name="email"
        label="e-mail"
        type="text"
        register={register}
      />
      <s.ErrorMessageWrapper>
        {errors.email && (
          <s.ErrorMessage>{errors.email.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>
      <Field.FieldText
        name="password"
        label="senha"
        type="password"
        register={register}
      />
      <s.ErrorMessageWrapper>
        {errors.password && (
          <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>
      <Button type="submit" fullWidth>
        entrar
      </Button>
    </s.Wrapper>
  );
}
