import api from "../../api";

export const getPokemonById = (id, params) => {
  return api.get(`/pokemon/${id}`, {
    params: { ...params },
  });
};

export const getPokemonSpecies = (params = {}) => {
  return api.get("/pokemon-species/?limit=0", {
    params: { ...params },
  });
};
