import { Story, Meta } from '@storybook/react/types-6-0';

import { MailIcon, IconType } from '.';

export default {
  title: '@Icon/Mail',
  component: MailIcon,
  args: {
    color: 'black'
  }
} as Meta;

export const MailIconDefault: Story<IconType> = (args) => (
  <MailIcon {...args} />
);
