import { Container, FormLogin } from 'components';

import * as s from './styles';

export default function LoginPage() {
  return (
    <s.Wrapper>
      <Container>
        <s.FormWrapper>
          <FormLogin />
        </s.FormWrapper>
      </Container>
    </s.Wrapper>
  );
}
