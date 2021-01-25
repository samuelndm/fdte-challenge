import { CURRENT_POKEMON_STATUS } from "./constants";

export const handlePokemonStats = (stats, statsType) => {
  if (stats && stats.length && statsType) {
    return stats.find(
      ({ stat, base_stat }) => stat.name === statsType && base_stat
    );
  }

  return {};
};

export const handleCurrentPokemonStatus = (currentPokemon, pokemonsBag) => {
  const pokemon = pokemonsBag.find(
    (pokemonBag) =>
      pokemonBag && pokemonBag.id === currentPokemon && currentPokemon.id
  );

  if (!pokemon) {
    return {
      ...currentPokemon,
      currentStatus: CURRENT_POKEMON_STATUS.NEW,
    };
  }

  if (pokemon.currentStatus === CURRENT_POKEMON_STATUS.CAPTURED) {
    return {
      ...currentPokemon,
      currentStatus: CURRENT_POKEMON_STATUS.CAPTURED,
    };
  }

  return {
    ...currentPokemon,
    currentStatus: CURRENT_POKEMON_STATUS.CUSTOM,
  };
};
