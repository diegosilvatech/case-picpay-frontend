import { Story, Meta } from '@storybook/react/types-6-0';

import Table, { TableProps } from '.';

import { mockedPaymentListData } from './mock';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    jest: ['Table.test.tsx']
  },
  args: {
    data: mockedPaymentListData
  }
} as Meta;

export const TableDefault: Story<TableProps> = (args) => <Table {...args} />;
