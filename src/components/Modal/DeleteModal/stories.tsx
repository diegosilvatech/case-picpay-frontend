import { Story, Meta } from '@storybook/react/types-6-0';

import DeleteModal, { DeleteModalProps } from '.';

export default {
  title: 'DeleteModal',
  component: DeleteModal,
  parameters: {
    jest: ['DeleteModal.test.tsx']
  },
  args: {
    visible: true,
    paymentRecord: {
      id: 1,
      name: 'Diego Silva',
      username: 'diegosilvatech',
      title: 'Frontend Developer | PicPay',
      value: 99.0,
      date: '2022-03-19T21:50:20Z',
      image:
        'https://media-exp1.licdn.com/dms/image/C4D03AQENRBPjaZaT4g/profile-displayphoto-shrink_800_800/0/1643972503237?e=1652918400&v=beta&t=90JLs_L26YBSRJ8HXT2NnMrZmCxx3BT-pXSd2SnRcac',
      isPayed: true
    }
  }
} as Meta;

export const DeleteModalDefault: Story<DeleteModalProps> = (args) => (
  <DeleteModal {...args} />
);
