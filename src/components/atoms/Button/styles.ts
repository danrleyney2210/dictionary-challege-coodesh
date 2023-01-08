import styled, { css } from "styled-components";

export const Container = styled.button`
  ${({ theme }) => css`
    height: 40px;
    padding: 10px;
    border-radius: 30px;
    background-color: ${theme.colors.blue["500"]};
    color: #fff;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #2a79ee;
    }
  `}
`;
