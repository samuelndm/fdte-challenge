import React from "react";
import { usePokemonsBagContext, useCurrentPokemonContext } from "contexts";
import * as S from "./styled";
import * as UI from "components/UIComponents";
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

      <UI.Button
        icon={iconPlus}
        onClick={(e) => setCurrentPokemon({ isCustom: true })}
      />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
