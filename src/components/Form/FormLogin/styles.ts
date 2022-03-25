import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
    width: 100%;
    max-width: 40rem;
  `}
`;

export const ErrorMessageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    position: relative;
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    position: absolute;
  `}
`;
