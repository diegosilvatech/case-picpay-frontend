import { useContext } from 'react';

import { AuthContext } from 'core/contexts';

import { Container, Menu } from 'components';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);

  return (
    <s.Wrapper>
      <Menu user={user} onLogout={logout} />
      <Container></Container>
    </s.Wrapper>
  );
}
