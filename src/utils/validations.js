import { isBagFull } from "./pokemonsBag";

export const validatePokemon = (pokemon) => {
  if (!pokemon) {
    throw new Error("Pokémon Inválido");
  }
};

export const validateIsBagFull = (bag) => {
  if (isBagFull(bag)) {
    throw new Error("Limite máximo de pokémons atingido!");
  }
};

export const validatePokemonId = (id) => {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Id Inválido");
  }
};
