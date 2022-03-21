import { InputHTMLAttributes } from 'react';

import * as s from './styles';

export type InputTextProps = {
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  label,
  name,
  value,
  onChange,
  ...props
}: InputTextProps) => {
  return (
    <s.Wrapper
      aria-label="InputText component"
      error={!!error}
      disabled={disabled}
    >
      {!!label && (
        <s.LabelWrapper>
          <s.Label htmlFor={name}>{label}</s.Label>
        </s.LabelWrapper>
      )}
      <s.InputWrapper>
        {!!icon && (
          <s.IconWrapper iconPosition={iconPosition}>{icon}</s.IconWrapper>
        )}
        <s.InputText
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </s.InputWrapper>
      {!!error && <s.Error>{error}</s.Error>}
    </s.Wrapper>
  );
};

export default InputText;
