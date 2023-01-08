import styled, { css } from "styled-components";

export const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  margin: 0 16px;
  height: 400px;
  max-width: 700px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const LefContent = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue[500]};
    height: 100%;
    width: 100%;
    border-radius: 8px 0 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    > div {
      h1 {
        color: ${theme.colors.white[500]};
        font-family: ${theme.font.family};
        margin-bottom: 0px;
      }
      p {
        color: ${theme.colors.white[500]};
      }
    }
  `}

  @media(max-width: 620px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white[500]};
  border-radius: 0 8px 8px 0;
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

export const ContentLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 10px;
`;
