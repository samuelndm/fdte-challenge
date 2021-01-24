import { ResponsiveContainer } from "assets/styles/globalStyled";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient-color);
`;

export const Container = styled(ResponsiveContainer)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  margin: 0 0 40px;
  width: 270px;
  height: 99px;
`;

export const Button = styled.button`
  width: 124px;
  height: 56px;
  border: none;
  border-radius: 42px;
  background-color: var(--action-color);

  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: var(--action-dark-color);
  }
`;
