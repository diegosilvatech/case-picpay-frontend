import styled, { css, DefaultTheme } from 'styled-components';
import { darken, tint } from 'polished';

import { ButtonProps } from '.';

const buttonModifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.black};

    &:hover {
      background: ${tint(0.1, theme.colors.primary)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    &:hover {
      background: ${darken(0.05, theme.colors.white)};
    }
  `
};

export const ButtonWrapper = styled.button<ButtonProps>`
  ${({ theme, variant }) => css`
    border: none;
    border-radius: ${theme.border.radius.small};
    padding: ${theme.spacings.medium} ${theme.spacings.medium};
    transition: background-color ${theme.transition.fast};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weights.semiBold};
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;
