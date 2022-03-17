import { Story, Meta } from '@storybook/react/types-6-0';

import { LockIcon } from 'assets/icons';

import InputPassword, { InputPasswordProps } from '.';

export default {
  title: 'Molecule/Form/InputPassword',
  component: InputPassword,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '40rem', padding: 15 }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    jest: ['InputText.test.tsx']
  },
  args: {
    label: 'password',
    name: 'password',
    placeholder: 'password',
    icon: <LockIcon />,
    iconPosition: 'left',
    initialValue: '',
    disabled: false
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta;

export const InputPasswordDefault: Story<InputPasswordProps> = (args) => (
  <InputPassword {...args} />
);

export const InputPasswordWithError: Story<InputPasswordProps> = (args) => (
  <InputPassword error="...something is wrong" {...args} />
);
