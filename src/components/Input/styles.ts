import styled, { css, DefaultTheme } from 'styled-components';

import { InputProps } from '.';

type IconPositionProps = Pick<InputProps, 'iconPosition'>;
type WrapperProps = Pick<InputProps, 'disabled'> & {
  error?: boolean;
};

const textFieldModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${InputWrapper} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
    ${IconWrapper} {
      svg {
        color: ${theme.colors.gray};
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border: 0.25rem solid ${theme.colors.error};

      &:focus-within {
        box-shadow: 0 0 0.25rem ${theme.colors.error};
      }
    }
    ${Input},
    ${Label} {
      color: ${theme.colors.error};
    }
    ${IconWrapper} {
      svg {
        color: ${theme.colors.error};
      }
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error }) => css`
    ${disabled && textFieldModifiers.disabled(theme)}
    ${error && textFieldModifiers.error(theme)}
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius.small};
    padding: 0 ${theme.spacings.small};
    border: 0.25rem solid;

    &:focus-within {
      box-shadow: 0 0 0.25rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    padding: ${theme.spacings.medium} 0;
    padding-${iconPosition}: ${theme.spacings.small};
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    max-height: 6rem;

    &[type="date"] {
      /* border: 2px solid red; */
    }
  `}
`;

export const LabelWrapper = styled.div``;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.default};
    font-weight: ${theme.font.weights.regular};
    color: ${theme.colors.black};
  `}
`;

export const IconWrapper = styled.div<IconPositionProps>`
  ${({ iconPosition }) => css`
    display: flex;
    align-items: center;
    order: ${iconPosition === 'right' ? 1 : 0};
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: 1.6rem;
  `}
`;
