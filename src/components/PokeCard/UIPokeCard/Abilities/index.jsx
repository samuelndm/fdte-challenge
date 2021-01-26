import React from "react";
import PropTypes from "prop-types";
import { concatenateAbilities } from "../../../../utils/pokemon";
import * as S from "./styled";
import * as C from "../";

const Abilities = ({ abilities }) => {
  if (!abilities) return null;
  return (
    <S.Container>
      <C.Section title="Habilidades" />

      <S.Abilities>{concatenateAbilities(abilities) || ""}</S.Abilities>
    </S.Container>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Abilities;
