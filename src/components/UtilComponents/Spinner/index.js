import React from "react";
import { ClipLoader } from "react-spinners";
import { Container } from "./styles";

const Spinner = () => {
  return (
    <Container>
      <ClipLoader size={50} color='#2F276C' />
    </Container>
  );
};

export default Spinner;
