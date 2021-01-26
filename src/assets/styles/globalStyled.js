import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  #root {
    --primary-color: #00D68F;
    --primary-dark-color: #004A45;
    --primary-transparent-color:#00D68F ;
    --primary-gradient-color: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
    --action-color: #FF3D71;
    --action-dark-color: #DB2C66;

    --neutral-100-color: #FFFFFF;
    --neutral-200-color: #F7F9FC;
    --neutral-300-color: #EDF1F7;
    --neutral-400-color: #E4E9F2;
    --neutral-500-color: #C5CEE0;
    --neutral-600-color: #C5CEE0;
    --neutral-700-color: #2E3A59;
    --neutral-800-color: #222B45;
    --neutral-900-color: #192038;
    --neutral-1000-color: #151A30;
    --neutral-1100-color: #101426;
  }


  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 24px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 24px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark-color);
  }
`;

export const PageContainer = styled.div`
  padding: var(--navbar-height) 0 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  position: relative;

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
