import { Container, InputText } from 'components';
import { MailIcon } from 'assets/icons';

import * as s from './styles';

export default function LoginPage() {
  return (
    <s.Wrapper>
      <Container>
        <InputText icon={<MailIcon />} iconPosition="left" />
      </Container>
    </s.Wrapper>
  );
}
