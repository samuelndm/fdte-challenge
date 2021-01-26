import styled from "styled-components";

export const Container = styled.button`
  margin: 0 auto;
  width: 221px;
  padding: 21px 0;
  height: 56px;
  position: sticky;
  left: 0;
  right: 0;
  bottom: 65px;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background: var(--action-color);
  border-radius: 42px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: var(--neutral-100-color);

  cursor: pointer;
`;
