import styled, { keyframes, css } from "styled-components";
import AshFront from "../../assets/images/ashFront.png";
import AshLeftLeg from "../../assets/images/ashLeftLeg.png";
import AshStop from "../../assets/images/ashStop.png";
import ashRightLeg from "../../assets/images/ashRightLeg.png";
import SearchTooltip from "../../assets/images/searchTooltip.png";
import SearchingTooltip from "../../assets/images/searchingTooltip.png";

export const LoadingAnimation = keyframes`
0% {
    background: url(${AshLeftLeg}) no-repeat center center;
}

50% {
    background: url(${AshStop}) no-repeat center center;
}

100% {
    background: url(${ashRightLeg}) no-repeat center center;

}
`;

export const Container = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  cursor: pointer;
  background: url(${AshFront}) no-repeat center center;
  transition: background 0s;

  animation: ${({ isLoading }) =>
    isLoading
      ? css`
          ${LoadingAnimation} 0.45s infinite
        `
      : ""};

  &:before {
    content: "";
    display: ${({ isLoading }) => (isLoading ? "block" : "none")};
    position: absolute;
    top: -105%;
    left: 0;
    width: 64px;
    height: 68px;
    background: url(${({ isLoading }) =>
      isLoading ? SearchingTooltip : SearchTooltip});
  }

  &:hover {
    &:before {
      display: block;
    }
  }
`;
