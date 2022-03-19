import { Story, Meta } from '@storybook/react/types-6-0';

import Menu, { MenuProps } from '.';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    jest: ['Menu.test.tsx']
  },
  args: {
    user: {
      name: 'Diego Silva',
      email: 'diego.silva@picpay.com'
    }
  }
} as Meta;

export const MenuDefault: Story<MenuProps> = (args) => <Menu {...args} />;
