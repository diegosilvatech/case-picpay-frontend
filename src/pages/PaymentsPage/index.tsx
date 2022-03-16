import { Button, Container } from 'components';

import * as s from './styles';

export default function PaymentsPage() {
  return (
    <s.Wrapper>
      <Container>
        <Button onClick={() => alert('welcome!')}>Payments/</Button>
      </Container>
    </s.Wrapper>
  );
}
