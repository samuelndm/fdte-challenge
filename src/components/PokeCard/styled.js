import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 580px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  @media screen and (max-width: 575px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 256px;
  position: absolute;
  top: 0;
  background: var(--primary-gradient-color);
  border-radius: 0;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  @media screen and (max-width: 575px) {
    height: 50%;
    border-radius: 0;
  }
`;

export const Image = styled.img`
  position: absolute;
`;

export const Body = styled.main`
  z-index: 10;
  padding: 160px 0 0;
  width: 100%;
  height: 426px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #f7f9fc;
  border-radius: 24px 24px 0 0;
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;

  @media screen and (max-width: 575px) {
    padding: 175px 0 0;
    height: 80%;
    border-radius: 24px 24px 0 0;
  }
`;

export const Info = styled.div`
  padding: 40px 50px 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 575px) {
    padding: 40px 25px 50px;
  }

  @media screen and (max-width: 350px) {
    padding: 40px 5px 50px;
  }
`;

export const DivisorVertical = styled.div`
  width: 48px;
  height: 1px;
  background: var(--neutral-500-color);
  border-radius: 24px 24px 0px 0px;
  transform: rotate(-90deg);
`;

export const DivisorHorizontal = styled.div`
  width: 100%;
  max-width: 331px;
  height: 1px;
  border-bottom: 1px solid var(--neutral-500-color);
`;

export const Stats = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const StatsLabel = styled.span`
  margin: 0 0 8px;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: var(--neutral-700-color);
  text-transform: uppercase;
`;

export const StatsContent = styled.p`
  font-family: Open Sans;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: var(--neutral-700-color);

  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;
