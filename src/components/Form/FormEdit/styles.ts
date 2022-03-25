import styled, { css } from 'styled-components';
import { Wrapper as FieldTextWrapper } from 'components/Field/FieldText/styles';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    ${FieldTextWrapper} {
      padding: ${theme.spacings.extraSmall};
    }
  `}
`;

export const FormRow = styled.div`
  display: flex;
`;

export const FormColumn = styled.div`
  width: 100%;
`;

export const ErrorMessageWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    padding-left: ${theme.spacings.extraSmall};
    position: relative;
  `}
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    position: absolute;
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
