import { Story, Meta } from '@storybook/react/types-6-0';

import Icon, { IconProps, icons } from '.';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    jest: ['Icon.test.tsx']
  },
  args: {
    name: 'badge',
    color: 'black'
  },
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: {
        type: 'select'
      }
    }
  }
} as Meta;

export const IconDefault: Story<IconProps> = (args) => <Icon {...args} />;
