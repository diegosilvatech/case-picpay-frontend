import { useState } from 'react';
import { Table as AntdTable, Tag as AntdTag, Space as AntdSpace } from 'antd';

import { formatDate, getHourFromDate } from 'core/helpers/date';
import { formatCurrency } from 'core/helpers/currency';

import { Text } from 'components';
import { PencilIcon, BinIcon } from 'assets/icons';
import { theme } from 'styles';

import * as s from './styles';

export type TableItemProps = {
  id: number;
  name: string;
  username: string;
  title: string;
  value: number;
  date: string;
  image: string;
  isPayed: boolean;
};

export type TableProps = {
  data: TableItemProps[];
};

const sortText = (
  firstRecord: TableItemProps,
  secondRecord: TableItemProps,
  parameter: 'name' | 'title' | 'date'
) => {
  return firstRecord[parameter].localeCompare(secondRecord[parameter]);
};

const sortNumber = (
  firstRecord: TableItemProps,
  secondRecord: TableItemProps
) => {
  return firstRecord.value - secondRecord.value;
};

const Table = ({ data }: TableProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (text: string, record: TableItemProps) => (
        <s.UserInfoWrapper>
          <s.UserImageWrapper>
            <s.UserImage src={text} alt={record.name} />
          </s.UserImageWrapper>
        </s.UserInfoWrapper>
      )
    },
    {
      title: 'Usuário',
      dataIndex: 'name',
      key: 'name',
      render: (name: string, record: TableItemProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {name}
            </Text>
          </s.UserInfo>
          <s.UserInfo>
            <Text type="span" color="black" size="extraSmall" opacity="medium">
              {`@${record.username}`}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (firstRecord: TableItemProps, secondRecord: TableItemProps) => {
        return sortText(firstRecord, secondRecord, 'name');
      }
    },
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      render: (title: string) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {title}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (firstRecord: TableItemProps, secondRecord: TableItemProps) => {
        return sortText(firstRecord, secondRecord, 'title');
      }
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      render: (date: string, record: TableItemProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {formatDate(date)}
            </Text>
          </s.UserInfo>
          <s.UserInfo>
            <Text type="span" color="black" size="extraSmall" opacity="medium">
              {getHourFromDate(record.date)}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (firstRecord: TableItemProps, secondRecord: TableItemProps) => {
        return sortText(firstRecord, secondRecord, 'date');
      }
    },
    {
      title: 'Valor',
      key: 'value',
      dataIndex: 'value',
      render: (value: number) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small" weight="semiBold">
              {formatCurrency(value)}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      ),
      sorter: (firstRecord: TableItemProps, secondRecord: TableItemProps) => {
        return sortNumber(firstRecord, secondRecord);
      }
    },
    {
      title: 'Situação',
      key: 'isPayed',
      dataIndex: 'isPayed',
      render: (status: string) => {
        if (status) {
          return <AntdTag color={theme.colors.primary}>PAGO</AntdTag>;
        }
        return <AntdTag color={theme.colors.black}>PENDENTE</AntdTag>;
      },
      filters: [
        { text: 'Pago', value: true },
        { text: 'Pendente', value: false }
      ],
      onFilter: (value: string | number | boolean, record: TableItemProps) => {
        return record.isPayed === value;
      }
    },
    {
      title: 'Ações',
      key: 'action',
      render: (record: TableItemProps) => {
        return (
          <AntdSpace size="middle">
            <s.PencilIconWrapper
              onClick={() => console.log('call EDIT', record.name)}
            >
              <PencilIcon />
            </s.PencilIconWrapper>
            <s.BinIconWrapper
              onClick={() => console.log('call DELETE', record.name)}
            >
              <BinIcon />
            </s.BinIconWrapper>
          </AntdSpace>
        );
      }
    }
  ];

  return (
    <s.Wrapper aria-label="Table component">
      <AntdTable
        columns={columns}
        dataSource={data}
        pagination={{
          position: ['bottomRight'],
          current: currentPage,
          pageSize: pageSize,
          onChange: (currentPage, pageSize) => {
            setCurrentPage(currentPage), setPageSize(pageSize);
          }
        }}
      />
    </s.Wrapper>
  );
};

export default Table;
