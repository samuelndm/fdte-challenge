import styled from "styled-components";
import pokeball from "../../../../assets/images/pokeball.png";

export const Container = styled.button`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  border: none;
  background: url(${pokeball}) no-repeat;
  cursor: pointer;

  @media screen and (max-width: 575px) {
    position: fixed;
    bottom: 20px;
  }
`;
