import { Story, Meta } from '@storybook/react/types-6-0';

import { MailIcon } from 'assets/icons';

import InputText, { InputTextProps } from '.';

export default {
  title: 'Molecules/Form/InputText',
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
    name: 'email',
    label: 'e-mail',
    placeholder: 'diego.silva@picpay.com',
    icon: <MailIcon />,
    iconPosition: 'left',
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
  <InputText {...args} />
);

InputTextWithError.args = {
  error: '...something is wrong'
};
