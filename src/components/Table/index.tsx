import { Table as AntdTable, Tag as AntdTag, Space as AntdSpace } from 'antd';

import { formatDate, getHourFromDate } from 'core/helpers/date';
import { formatCurrency } from 'core/helpers/currency';

import { Text } from 'components';
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
      render: (text: string, record: TableItemProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {text}
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
      render: (text: string) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {text}
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
      render: (text: string, record: TableItemProps) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {formatDate(text)}
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
      render: (text: number) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small" weight="semiBold">
              {formatCurrency(text)}
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
      render: (text: string, record: TableItemProps) => {
        return (
          <AntdSpace size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
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
        pagination={{ position: ['bottomRight'] }}
      />
    </s.Wrapper>
  );
};

export default Table;
