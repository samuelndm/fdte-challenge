import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useCurrentPokemonContext } from "contexts/CurrentPokemonProvider";
import { Sidebar, Character, Modal, PokeCard } from "components";

const MapPage = () => {
  const [openPokemonModal, setOpenPokemonModal] = useState(false);
  const { currentPokemon } = useCurrentPokemonContext();

  useEffect(() => {
    setOpenPokemonModal(!!currentPokemon);
  }, [currentPokemon]);

  return (
    <S.MapWrapper className="map">
      <Sidebar />

      <S.Container>
        <Character />
      </S.Container>

      <Modal openModal={openPokemonModal} closeModal={setOpenPokemonModal} s>
        <PokeCard pokemon={currentPokemon} />
      </Modal>
    </S.MapWrapper>
  );
};

export default MapPage;
