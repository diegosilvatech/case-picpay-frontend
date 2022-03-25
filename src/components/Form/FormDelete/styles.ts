import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const WarningWrapper = styled.div`
  ${() => css`
    text-align: center;
  `}
`;

export const WarningMessage = styled.div`
  ${() => css``}
`;

export const PaymentInfoWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const InfoLabelWrapper = styled.div`
  ${() => css``}
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
