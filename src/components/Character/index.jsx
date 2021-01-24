import React, { useState } from "react";
import * as S from "./styled";


const Character = () => {
  const [isLoading, setIsLoading] = useState(false)

const handleClick = (event) => {
  event.preventDefault();

  setIsLoading(prev => !prev)
}

  return <S.Container isLoading={isLoading} onClick={(e) => handleClick(e)} />
  
  
  ;
};

export default Character;
