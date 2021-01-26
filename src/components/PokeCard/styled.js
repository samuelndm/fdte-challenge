import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: var(--primary-gradient-color);

  @media screen and (max-width: 575px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export const Body = styled.div`
  margin: auto 0 0;
  padding: 175px 0 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  position: relative;
  top: 138.5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: var(--neutral-200-color);
  border-radius: 24px 24px 0 0;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;

  & > * {
    margin-bottom: 45px;
  }

  @media screen and (max-width: 575px) {
    border-radius: 24px 24px 0 0;
  }
`;
