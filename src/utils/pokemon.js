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
  if (currentPokemon?.isCustom) {
    return CURRENT_POKEMON_STATUS.CUSTOM;
  }

  const pokemon = pokemonsBag?.find(
    (pokemonBag) => pokemonBag?.id === currentPokemon?.id
  );

  if (!pokemon) {
    return CURRENT_POKEMON_STATUS.NEW;
  }

  return CURRENT_POKEMON_STATUS.CAPTURED;
};

export const concatenateAbilities = (abilities) => {
  let string = abilities?.map(({ ability }) => ability?.name || "")?.join(", ");

  return string;
};
