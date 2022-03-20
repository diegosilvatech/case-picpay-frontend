import { useState } from 'react';
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
    currentPage: 1,
    pageSize: 5,
    total: mockedTableData.length,
    handlePageChange: () => ({}),
    data: mockedTableData
  }
} as Meta;

export const TableDefault: Story<TableProps> = (args) => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage);
  const [pageSize, setPageSize] = useState<number>(args.pageSize);

  const handlePageChange = (currentPage: number, pageSize: number) => {
    setCurrentPage(currentPage), setPageSize(pageSize);
  };

  return (
    <Table
      {...args}
      handlePageChange={handlePageChange}
      pageSize={pageSize}
      currentPage={currentPage}
    />
  );
};
