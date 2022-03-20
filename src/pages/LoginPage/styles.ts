import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const FormWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};

    div {
      svg {
        width: 100%;
        height: 5rem;
      }
    }
  `}
`;
