import { Story, Meta } from '@storybook/react/types-6-0';

import ModalBase, { ModalBaseProps } from '.';

export default {
  title: 'Organisms/Modal/ModalBase',
  component: ModalBase,
  parameters: {
    jest: ['Modal.test.tsx']
  },
  args: {
    visible: true,
    title: 'Example modal'
  }
} as Meta;

export const ModalDefault: Story<ModalBaseProps> = (args) => (
  <ModalBase {...args} />
);
