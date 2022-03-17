import { InputText } from 'components';
import { InputTextProps } from 'components/InputText';

export type InputPasswordProps = InputTextProps;

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
