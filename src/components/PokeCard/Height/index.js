import React from "react";
import PropTypes from "prop-types";
import * as S from "../styled";

const Height = ({ height }) => {
  return (
    <S.Stats>
      <S.StatsLabel>ALTURA</S.StatsLabel>
      <S.StatsContent>{`${height / 10} m`}</S.StatsContent>
    </S.Stats>
  );
};

Height.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Height;
