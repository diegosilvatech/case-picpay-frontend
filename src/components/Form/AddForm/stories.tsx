import { Story, Meta } from '@storybook/react/types-6-0';

import AddForm, { AddFormProps } from '.';

export default {
  title: 'AddForm',
  component: AddForm,
  parameters: {
    jest: ['AddForm.test.tsx']
  }
} as Meta;

export const AddFormDefault: Story<AddFormProps> = (args) => (
  <AddForm {...args} />
);
