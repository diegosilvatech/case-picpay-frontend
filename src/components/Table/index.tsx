import { Table as AntdTable, Tag as AntdTag, Space as AntdSpace } from 'antd';

import { Text } from 'components';
import { theme } from 'styles';
import { formatDate, getHourFromDate } from 'core/helpers/date';

import { PaymentDataProps, PaymentListDataProps } from './mock';
import * as s from './styles';

export type TableProps = {
  data: PaymentListDataProps;
};

const Table = ({ data }: TableProps) => {
  const columns = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (text: string, record: PaymentDataProps) => (
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
      render: (text: string, record: PaymentDataProps) => (
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
      )
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
      )
    },
    {
      title: 'Data',
      dataIndex: 'date',
      key: 'date',
      render: (text: string, record: PaymentDataProps) => (
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
      )
    },
    {
      title: 'Valor',
      key: 'value',
      dataIndex: 'value',
      render: (text: string) => (
        <s.UserInfoWrapper>
          <s.UserInfo>
            <Text type="span" color="black" size="small">
              {text}
            </Text>
          </s.UserInfo>
        </s.UserInfoWrapper>
      )
    },
    {
      title: 'Situação',
      key: 'isPayed',
      dataIndex: 'isPayed',
      render: (status: string) => {
        if (status) {
          return <AntdTag color={theme.colors.primary}>PAGO</AntdTag>;
        }
        return <AntdTag color={theme.colors.error}>PENDENTE</AntdTag>;
      }
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text: string, record: PaymentDataProps) => {
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
      <AntdTable columns={columns} dataSource={data} />
    </s.Wrapper>
  );
};

export default Table;
