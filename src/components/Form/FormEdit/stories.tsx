import { Story, Meta } from '@storybook/react/types-6-0';

import FormEdit, { FormEditProps } from '.';

export default {
  title: 'Organisms/Form/FormEdit',
  component: FormEdit,
  parameters: {
    jest: ['FormEdit.test.tsx']
  }
} as Meta;

export const FormEditDefault: Story<FormEditProps> = (args) => (
  <FormEdit {...args} />
);
