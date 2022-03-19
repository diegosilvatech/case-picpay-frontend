import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.extraLarge} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;
