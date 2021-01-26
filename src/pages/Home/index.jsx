import React from "react";
import * as S from "./styled";
import * as UI from "components/UIComponents";
import pokemonLogo from "../../assets/images/pokemonLogo.png";

const HomePage = () => (
  <S.HomeWrapper>
    <S.Container>
      <UI.LinkHandler url="/map">
        <S.Content>
          <S.Logo src={pokemonLogo} alt="Logo da home" />
          <S.Button>START</S.Button>
        </S.Content>
      </UI.LinkHandler>
    </S.Container>
  </S.HomeWrapper>
);

export default HomePage;
