import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${theme.colors.white["600"]};
    height: 40px;
    padding: 4px;
    border-radius: 2px;

    > input {
      border: none;
      height: 30px;
      width: 100%;
      background-color: ${theme.colors.white["600"]};
      font-size: 14px;
      color: #333;
    }
  `}
`;
