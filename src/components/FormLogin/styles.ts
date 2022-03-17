import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  max-width: 40rem;
`;

export const FieldWrapper = styled.div`
  ${({ theme }) => css`
    & + div {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const ButtonWrapper = styled.div``;
