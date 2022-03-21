import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  max-width: 80rem;
`;

export const FieldWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small};
  `}
`;

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;

    button {
      & + button {
        margin-left: ${theme.spacings.medium};
      }
    }
  `}
`;

export const FormRowsWrapper = styled.div`
  display: flex;
`;

export const FormColumn = styled.div`
  width: 100%;
`;
