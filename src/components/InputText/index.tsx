import { InputHTMLAttributes, useState } from 'react';

import * as s from './styles';

export type InputTextProps = {
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
  onInput?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  initialValue = '',
  label,
  name,
  onInput,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

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
        <s.Input
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
