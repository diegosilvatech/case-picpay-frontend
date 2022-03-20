import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const TableWrapper = styled.div``;
