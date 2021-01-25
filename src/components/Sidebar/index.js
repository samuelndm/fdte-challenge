import React from "react";
import { usePokemonsBagContext } from "contexts/PokemonsBag";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";
import * as S from "./styled";
import { Button } from "components";
import iconPlus from "assets/images/plus.png";

const Sidebar = () => {
  const { pokemonsBag } = usePokemonsBagContext();
  const { setCurrentPokemon } = useCurrentPokemonContext();

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {pokemonsBag.map((pokemon, index) => (
          <S.SideBarItem
            url={pokemon?.sprites?.front_default}
            onClick={(e) => setCurrentPokemon(pokemon)}
            key={`SideBarItem-${index}`}
          >
            {!pokemon && "?"}
          </S.SideBarItem>
        ))}
      </S.SideBarList>

      <Button icon={iconPlus} />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
