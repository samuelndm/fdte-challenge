import styled from "styled-components";
import editIcon from "../../../assets/images/editIcon.png";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  padding: 0 30px;
  position: relative;

  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: var(--neutral-700-color);
`;

export const Edit = styled.button`
  width: 16px;
  height: 16px;
  position: absolute;
  margin: auto 0;
  bottom: 0;
  top: 0;
  right: -20px;
  background: url(${editIcon});
  border: none;
  cursor: pointer;
`;

export const EditingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditingInput = styled.input``;

export const EditingSave = styled.button``;

export const EditingCancel = styled.button``;
