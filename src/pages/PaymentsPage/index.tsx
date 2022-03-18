import { useContext } from 'react';

import { AuthContext } from 'contexts';

import { Button, Container } from 'components';

import * as s from './styles';

export default function PaymentsPage() {
  const { logout } = useContext(AuthContext);

  return (
    <s.Wrapper>
      <Container>
        <Button onClick={() => logout()}>LOGOUT/</Button>
      </Container>
    </s.Wrapper>
  );
}
