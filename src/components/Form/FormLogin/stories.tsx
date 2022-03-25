import { Story, Meta } from '@storybook/react/types-6-0';

import FormLogin, { FormLoginProps } from '.';

export default {
  title: '@New/FormLogin',
  component: FormLogin,
  parameters: {
    jest: ['FormLogin.test.tsx']
  }
} as Meta;

export const FormLoginDefault: Story<FormLoginProps> = (args) => (
  <FormLogin {...args} />
);
