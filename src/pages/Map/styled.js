import styled from "styled-components";
import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
