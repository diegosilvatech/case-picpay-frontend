import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    jest: ['Modal.test.tsx']
  },
  args: {
    visible: true,
    title: 'Example modal'
  }
} as Meta;

export const ModalDefault: Story<ModalProps> = (args) => <Modal {...args} />;
