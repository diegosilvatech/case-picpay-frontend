import { useContext, useState, useEffect } from 'react';

import { AuthContext } from 'core/contexts';

import { Container, Menu, Text, Button, Table } from 'components';
import { mockedTableData } from 'components/Table/mock';

import { getPaymentList } from 'core/services';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);

  console.log(payments);

  const getPayments = async () => {
    const response = await getPaymentList();
    setPayments(response.data);
    return response.data;
  };

  useEffect(() => {
    console.log('PRONTO!');
    getPayments();
  }, []);

  return (
    <s.Wrapper>
      <Menu user={user} onLogout={logout} />
      <Container>
        <s.HeaderWrapper>
          <Text type="h1" size="extraLarge" weight="semiBold">
            Meus pagamentos
          </Text>
          <Button>Adicionar pagamento</Button>
        </s.HeaderWrapper>

        <s.TableWrapper>
          <Table data={mockedTableData} />
        </s.TableWrapper>
      </Container>
    </s.Wrapper>
  );
}
