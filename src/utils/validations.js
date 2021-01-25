export const validatePokemon = (pokemon) => {
  if (!pokemon) {
    throw new Error("Pokémon Inválido");
  }
};

export const validateIsBagFull = (bag) => {
  for (let i = 0; i < bag.length; i++) {
    if (!bag[i]) {
      return true;
    }
  }

  throw new Error("Limite máximo de pokémons atingido!");
};
