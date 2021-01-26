import React, { useEffect, useState } from "react";
import { useCurrentPokemonContext } from "contexts";
import * as S from "./styled";
import * as C from "components";
import * as UI from "components/UIComponents";

const MapPage = () => {
  const [openPokemonModal, setOpenPokemonModal] = useState(false);
  const { currentPokemon } = useCurrentPokemonContext();

  useEffect(() => {
    setOpenPokemonModal(!!currentPokemon);
  }, [currentPokemon]);

  return (
    <S.MapWrapper className="map">
      <C.Sidebar />

      <S.Container>
        <C.Character />
      </S.Container>

      <UI.Modal openModal={openPokemonModal} closeModal={setOpenPokemonModal} s>
        <C.PokeCard pokemon={currentPokemon} />
      </UI.Modal>
    </S.MapWrapper>
  );
};

export default MapPage;
