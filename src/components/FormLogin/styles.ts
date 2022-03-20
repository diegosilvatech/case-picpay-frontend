import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  max-width: 40rem;
`;

export const FieldWrapper = styled.div`
  ${({ theme }) => css`
    & > div {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;
