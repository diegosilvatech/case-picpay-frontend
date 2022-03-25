import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${() => css`
    width: 100%;
    max-width: 40rem;
  `}
`;

export const ErrorMessageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
