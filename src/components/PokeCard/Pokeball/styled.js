import styled from "styled-components";
import pokeball from "../../../assets/images/pokeball.png";

export const Container = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  left: 40%;
  bottom: 16%;
  background: url(${pokeball}) no-repeat center center;

  cursor: pointer;

  @media screen and (max-width: 350px) {
    left: 36%;
    bottom: 27%;
  }
`;
