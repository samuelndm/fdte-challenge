import React from "react";
import * as S from "./styled";
import Sidebar from "components/Sidebar";
import { Character } from "components";

const MapPage = () => (
  <S.MapWrapper className="map">
    <Sidebar />
    <S.Container>
      <Character />
    </S.Container>
  </S.MapWrapper>
);

export default MapPage;
