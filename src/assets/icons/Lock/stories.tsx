import { Story, Meta } from '@storybook/react/types-6-0';

import { LockIcon, IconType } from '.';

export default {
  title: '@Icon/Lock',
  component: LockIcon,
  args: {
    color: 'black'
  }
} as Meta;

export const LockIconDefault: Story<IconType> = (args) => (
  <LockIcon {...args} />
);
