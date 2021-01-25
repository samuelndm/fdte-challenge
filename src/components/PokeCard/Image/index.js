import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";
import placeholder from "../../../assets/images/placeholder.jpg";

const Image = ({ sprites }) => {
  if (!sprites) return null;
  return (
    <S.Container>
      <S.Image
        src={sprites.front_default || placeholder}
        alt="Imagem do pokemon"
      />
    </S.Container>
  );
};

Image.propTypes = {
  sprites: PropTypes.object.isRequired,
};

export default Image;
