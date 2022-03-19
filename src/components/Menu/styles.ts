import styled, { css } from 'styled-components';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    display: flex;
    padding: ${theme.spacings.large} 0;
  `}
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RightContentWrapper = styled.div`
  display: flex;
`;

export const LogoutButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const UserInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.medium};
  `}
`;

export const UserName = styled.span``;

export const UserEmail = styled.span``;
