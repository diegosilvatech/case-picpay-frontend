import { Story, Meta } from '@storybook/react/types-6-0';

import Table, { TableProps } from '.';

import { mockedTableData } from './mock';

export default {
  title: 'Organisms/Table',
  component: Table,
  parameters: {
    jest: ['Table.test.tsx']
  },
  args: {
    data: mockedTableData
  }
} as Meta;

export const TableDefault: Story<TableProps> = (args) => <Table {...args} />;
