import { Story, Meta } from '@storybook/react/types-6-0';

import FormLogin, { FormLoginProps } from '.';

export default {
  title: 'Organisms/Form/FormLogin',
  component: FormLogin,
  parameters: {
    jest: ['FormLogin.test.tsx']
  },
  args: {
    data: {
      email: 'diego.silva@picpay.com',
      password: '#mecontrata'
    }
  }
} as Meta;

export const FormLoginDefault: Story<FormLoginProps> = (args) => (
  <FormLogin {...args} />
);
