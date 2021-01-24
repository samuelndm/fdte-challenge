import React from "react";
import * as S from "./styled";
import { LinkHandler } from "components";
import PokemonLogo from '../../assets/images/pokemonLogo.png'

const HomePage = () => (
  <S.HomeWrapper>
    <S.Container>
  <LinkHandler url='/map'>
    <S.Content>
      <S.Logo src={PokemonLogo} alt='logo da home' />
      <S.Button>START</S.Button>
    </S.Content>
  </LinkHandler>
    </S.Container>
  </S.HomeWrapper>
);

export default HomePage;
