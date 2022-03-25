import { Story, Meta } from '@storybook/react/types-6-0';

import ModalAdd, { ModalAddProps } from '.';

export default {
  title: 'Organisms/Modal/ModalAdd',
  component: ModalAdd,
  parameters: {
    jest: ['ModalAdd.test.tsx']
  },
  args: {
    visible: true
  }
} as Meta;

export const ModalAddDefault: Story<ModalAddProps> = (args) => (
  <ModalAdd {...args} />
);
