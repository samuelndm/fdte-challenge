import styled from "styled-components";

export const Container = styled.div`
  z-index: 11;
  padding: 30px;
  width: 247px;
  height: 247px;
  position: absolute;
  top: 30px;
  border-radius: 50%;
  border: 4px solid var(--primary-color);
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
`;
