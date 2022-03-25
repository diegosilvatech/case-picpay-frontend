import { Story, Meta } from '@storybook/react/types-6-0';

import { MailIcon } from 'assets/icons';

import FieldText, { FieldTextProps } from '.';

export default {
  title: '@New/FieldText',
  component: FieldText,
  args: {
    icon: <MailIcon />,
    iconPosition: 'right',
    label: 'Nome'
  }
} as Meta;

export const FieldTextDefault: Story<FieldTextProps> = (args) => (
  <FieldText {...args} />
);
