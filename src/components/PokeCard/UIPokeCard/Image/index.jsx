import React from "react";
import PropTypes from "prop-types";
import placeholder from "../../../../assets/images/placeholder.jpg";
import * as S from "./styled";
import Edit from "./Edit";

const Image = ({ sprites, isEditable }) => {
  return (
    <S.Container>
      {isEditable ? (
        <Edit sprites={sprites} />
      ) : (
        <S.Image
          src={sprites?.front_default || placeholder}
          alt="Imagem do pokemon"
        />
      )}
    </S.Container>
  );
};

Image.propTypes = {
  sprites: PropTypes.object.isRequired,
  isEditable: PropTypes.bool,
};

export default Image;
