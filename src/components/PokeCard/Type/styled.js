import styled from "styled-components";

export const Container = styled.div`
  margin: auto 0 30px;
  padding: 0 22%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 575px) {
    padding: 0 15%;
  }
`;
