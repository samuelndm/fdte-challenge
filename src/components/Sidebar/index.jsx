import React from "react";
import * as S from "./styled";
import { Button } from "components";
import iconPlus from "assets/images/plus.png";


const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>?</S.SideBarItem>
    </S.SideBarList>

    <Button icon={iconPlus} />
  </S.SideBarWrapper>
);

export default Sidebar;
