import { Container, FormLogin } from 'components';

import * as s from './styles';

export default function LoginPage() {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };
  return (
    <s.Wrapper>
      <Container>
        <s.FormWrapper>
          <FormLogin onSubmit={onSubmit} />
        </s.FormWrapper>
      </Container>
    </s.Wrapper>
  );
}
