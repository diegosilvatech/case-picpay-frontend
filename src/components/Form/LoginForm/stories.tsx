import { Story, Meta } from '@storybook/react/types-6-0';

import LoginForm, { LoginFormProps } from '.';

export default {
  title: 'Organisms/Form/LoginForm',
  component: LoginForm,
  parameters: {
    jest: ['LoginForm.test.tsx']
  },
  args: {
    data: {
      email: 'diego.silva@picpay.com',
      password: '#mecontrata'
    }
  }
} as Meta;

export const LoginFormDefault: Story<LoginFormProps> = (args) => (
  <LoginForm {...args} />
);
