import { Container, Logo, Text, MediaMatch } from 'components';
import { LogoutIcon } from 'assets/icons';

import * as s from './styles';

type UserProps = {
  id: number;
  name: string;
  email: string;
} | null;

export type MenuProps = {
  user: UserProps;
  onLogout: () => void;
};

const Menu = ({ user, onLogout }: MenuProps) => (
  <s.Wrapper aria-label="Menu component">
    <Container>
      <s.ContentWrapper>
        <s.LogoWrapper>
          <Logo />
        </s.LogoWrapper>

        <s.RightContentWrapper>
          <s.LogoutButtonWrapper onClick={() => onLogout()}>
            <LogoutIcon />
          </s.LogoutButtonWrapper>
          <MediaMatch greaterThan="medium">
            <s.UserInfoWrapper>
              {user && user.name && (
                <s.UserName>
                  <Text type="span" color="black" size="large">
                    {user.name}
                  </Text>
                </s.UserName>
              )}
              {user && user.email && (
                <s.UserEmail>
                  <Text
                    type="span"
                    color="black"
                    size="default"
                    weight="light"
                    opacity="medium"
                  >
                    {user.email}
                  </Text>
                </s.UserEmail>
              )}
            </s.UserInfoWrapper>
          </MediaMatch>
        </s.RightContentWrapper>
      </s.ContentWrapper>
    </Container>
  </s.Wrapper>
);

export default Menu;
