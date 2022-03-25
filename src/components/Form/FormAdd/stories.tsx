import { Story, Meta } from '@storybook/react/types-6-0';

import FormAdd, { FormAddProps } from '.';

export default {
  title: '@New/FormAdd',
  component: FormAdd,
  parameters: {
    jest: ['FormAdd.test.tsx']
  }
} as Meta;

export const FormAddDefault: Story<FormAddProps> = (args) => (
  <FormAdd {...args} />
);
