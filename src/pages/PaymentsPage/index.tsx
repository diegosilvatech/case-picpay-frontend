import { useContext } from 'react';

import { AuthContext } from 'core/contexts';

import { Container, Menu, Text, Button, Table } from 'components';
import { mockedTableData } from 'components/Table/mock';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);

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
