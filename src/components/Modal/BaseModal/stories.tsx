import { Story, Meta } from '@storybook/react/types-6-0';

import BaseModal, { BaseModalProps } from '.';

export default {
  title: 'BaseModal',
  component: BaseModal,
  parameters: {
    jest: ['Modal.test.tsx']
  },
  args: {
    visible: true,
    title: 'Example modal'
  }
} as Meta;

export const ModalDefault: Story<BaseModalProps> = (args) => (
  <BaseModal {...args} />
);
