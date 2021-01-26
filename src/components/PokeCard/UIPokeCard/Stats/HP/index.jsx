import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { handlePokemonStats } from "utils/pokemon";
import { POKEMON_STATS } from "utils/constants";
import * as S from "../styled";

const HP = ({ stats }) => {
  const [hp, setHp] = useState(0);

  useEffect(() => {
    const hpStats = handlePokemonStats(stats, POKEMON_STATS.HP);
    setHp(hpStats?.base_stat || "Indisponível");
  }, [stats]);

  return (
    <S.Stats>
      <S.StatsLabel>HP</S.StatsLabel>
      <S.StatsContent>{`${hp}/${hp}`}</S.StatsContent>
    </S.Stats>
  );
};

HP.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HP;
