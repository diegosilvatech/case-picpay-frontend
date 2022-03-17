import styled, { css } from 'styled-components';

import { IconBaseProps } from '.';

export const Wrapper = styled.div<IconBaseProps>`
  ${({ theme, color = 'black' }) => css`
    display: flex;
    color: ${theme.colors[color]};
  `}
`;
