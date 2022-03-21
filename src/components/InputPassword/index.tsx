import { Input } from 'components';
import { InputProps } from 'components/Input';

export type InputPasswordProps = InputProps;

const InputPassword = ({
  disabled = false,
  error,
  icon,
  iconPosition = 'left',
  label,
  name,
  value,
  onChange,
  ...props
}: InputPasswordProps) => {
  return (
    <Input
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
