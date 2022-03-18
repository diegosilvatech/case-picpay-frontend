import { useContext } from 'react';

import { AuthContext } from 'core/contexts';

import { Button, Container } from 'components';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout, user } = useContext(AuthContext);

  return (
    <s.Wrapper>
      <Container>
        <h1>Olá, {`${user?.name}`}</h1>
        <Button onClick={() => logout()}>LOGOUT/</Button>
      </Container>
    </s.Wrapper>
  );
}
