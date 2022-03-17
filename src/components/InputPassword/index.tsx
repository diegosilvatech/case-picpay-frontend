import { useState } from 'react';
import { InputText } from 'components';
import { InputTextProps } from 'components/InputText';

export type InputPasswordProps = InputTextProps;

const InputPassword = ({
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  initialValue = '',
  label,
  name,
  onInput,
  ...props
}: InputPasswordProps) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };
  return (
    <InputText
      name={name}
      onChange={onChange}
      value={value}
      iconPosition={iconPosition}
      disabled={disabled}
      error={error}
      icon={icon}
      label={label}
      {...props}
      type="password"
    />
  );
};

export default InputPassword;
