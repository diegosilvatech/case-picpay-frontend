import { Story, Meta } from '@storybook/react/types-6-0';
import { useForm } from 'react-hook-form';

import { PencilIcon } from 'assets/icons';

import FieldText, { FieldTextProps } from '.';

export default {
  title: 'Molecules/Field/FieldText',
  component: FieldText,
  args: {
    name: 'name',
    label: 'name',
    type: 'text',
    iconPosition: 'right',
    icon: <PencilIcon />,
    register: () => null
  }
} as Meta;

export const FieldTextDefault: Story<FieldTextProps> = (args) => {
  const { register } = useForm();

  return <FieldText register={register} {...args} />;
};
