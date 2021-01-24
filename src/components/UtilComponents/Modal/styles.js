import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(51, 51, 51, 0.92);
`;

export const ContentOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContentClosingAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const Content = styled.div`
  z-index: 99999;
  margin: auto;
  position: relative;
  border-radius: 6px;
  background-color: #fff;
  animation: ${({ isOpen }) =>
      isOpen ? ContentOpenAnimation : ContentClosingAnimation}
    0.5s ease-in-out;

  width: ${({ size }) => {
    switch (size) {
      case "lg":
        return "800px";
      case "md":
        return "600px";
      case "sm":
        return "400px";

      default:
        break;
    }
  }};

  @media (min-width: 480px) {
    max-width: 728px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Header = styled.header`
  padding: 20px 5px 20px 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #efedf3;
  color: #333;
  border-radius: 6px 6px 0 0;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;

export const Body = styled.main`
  padding: 20px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
`;

export const Footer = styled.footer`
  border-radius: inherit;
`;

export const CloseButton = styled.button`
  z-index: 999999;
  position: ${({ hasChildren }) => (hasChildren ? "absolute" : "relative")};
  right: ${({ hasChildren }) => (hasChildren ? "5px" : "0")};
  margin: 0 5px 0 30px;
  padding: 5px;
  cursor: pointer;
  background: transparent;
`;

export const CloseIcon = styled.i`
  color: #fff;
  font-size: 24px;
`;
