import { Story, Meta } from '@storybook/react/types-6-0';

import Logo, { LogoProps } from '.';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    jest: ['Logo.test.tsx']
  },
  args: { color: 'black' }
} as Meta;

export const LogoDefault: Story<LogoProps> = (args) => <Logo {...args} />;
