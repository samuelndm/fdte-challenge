import styled from "styled-components";
import checkIcon from "../../../../../assets/images/checkIcon.png";
import closeIcon from "../../../../../assets/images/close.png";

export const Container = styled.form`
  margin: 8px 0;
  padding: 0 5px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)),
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));

  & > * {
    margin: 5px;
  }
`;

export const Input = styled.input`
  padding: 0 20px;
  height: 48px;
  background: var(--neutral-100-color);
  border: 1px solid var(--neutral-600-color);
  border-radius: 4px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: var(--neutral-1100-color);

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const Save = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: url(${checkIcon}) no-repeat center center;
  background-color: var(--neutral-300-color);
  background-size: fit;
  border: none;
  cursor: pointer;
`;

export const Cancel = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: url(${closeIcon}) no-repeat center center;
  background-color: var(--neutral-300-color);
  background-size: 25% auto;
  border: none;
  cursor: pointer;
`;
