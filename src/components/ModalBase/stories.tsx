import { Story, Meta } from '@storybook/react/types-6-0';

import ModalBase, { ModalBaseProps } from '.';

export default {
  title: 'ModalBase',
  component: ModalBase,
  parameters: {
    jest: ['ModalBase.test.tsx']
  },
  args: {
    visible: true,
    title: 'Example modal'
  }
} as Meta;

export const ModalBaseDefault: Story<ModalBaseProps> = (args) => (
  <ModalBase {...args} />
);
