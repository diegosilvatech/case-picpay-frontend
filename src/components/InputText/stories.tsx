import { Story, Meta } from '@storybook/react/types-6-0';

import { MailIcon } from 'assets/icons';

import InputText, { InputTextProps } from '.';

export default {
  title: 'Molecule/Form/InputText',
  component: InputText,
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
    label: 'e-mail',
    name: 'email',
    placeholder: 'diego.silva@picpay.com',
    icon: <MailIcon />,
    iconPosition: 'left',
    initialValue: '',
    disabled: false
  },
  argTypes: {
    onChange: { action: 'changed' }
  }
} as Meta;

export const InputTextDefault: Story<InputTextProps> = (args) => (
  <InputText {...args} />
);

export const InputTextWithError: Story<InputTextProps> = (args) => (
  <InputText error="...something is wrong" {...args} />
);
