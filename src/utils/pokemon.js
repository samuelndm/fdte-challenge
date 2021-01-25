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
    (pokemonBag) => pokemonBag?.id === currentPokemon?.id
  );

  if (!pokemon) {
    return CURRENT_POKEMON_STATUS.NEW;
  }

  if (pokemon.isCustom) {
    return CURRENT_POKEMON_STATUS.CUSTOM;
  }

  return CURRENT_POKEMON_STATUS.CAPTURED;
};
