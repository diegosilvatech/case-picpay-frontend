import { Story, Meta } from '@storybook/react/types-6-0';

import ModalEdit, { ModalEditProps } from '.';

export default {
  title: 'ModalEdit',
  component: ModalEdit,
  parameters: {
    jest: ['ModalEdit.test.tsx']
  }
} as Meta;

export const ModalEditDefault: Story<ModalEditProps> = (args) => (
  <ModalEdit {...args} />
);
