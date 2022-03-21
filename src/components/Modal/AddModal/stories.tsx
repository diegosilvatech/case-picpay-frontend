import { Story, Meta } from '@storybook/react/types-6-0';

import AddModal, { AddModalProps } from '.';

export default {
  title: 'AddModal',
  component: AddModal,
  parameters: {
    jest: ['AddModal.test.tsx']
  },
  args: {
    visible: true
  }
} as Meta;

export const AddModalDefault: Story<AddModalProps> = (args) => (
  <AddModal {...args} />
);
