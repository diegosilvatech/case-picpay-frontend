import { useContext } from 'react';

import { AuthContext } from 'core/contexts';

import { Container, Menu, Text, Button } from 'components';

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
      </Container>
    </s.Wrapper>
  );
}
