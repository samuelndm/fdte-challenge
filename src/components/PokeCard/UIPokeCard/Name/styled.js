import styled from "styled-components";
import editIcon from "../../../../assets/images/editIcon.png";
import checkIcon from "../../../../assets/images/checkIcon.png";
import closeIcon from "../../../../assets/images/close.png";

export const Container = styled.div`
  width: 100%;
  height: auto;
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
  margin: 8px 0;
  padding: 0 32px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)),
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
`;

export const EditingInput = styled.input`
  padding: 0 20px;
  height: 100%;
  background: var(--neutral-100-color);
  border: 1px solid var(--neutral-600-color);
  border-radius: 4px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: var(--neutral-1100-color);
`;

export const EditingSave = styled.button`
  width: 48px;
  height: 100%;
  border-radius: 4px;
  background: url(${checkIcon}) no-repeat center center;
  background-color: var(--neutral-300-color);
  background-size: fit;
  border: none;
  cursor: pointer;
`;

export const EditingCancel = styled.button`
  width: 48px;
  height: 100%;
  border-radius: 4px;
  background: url(${closeIcon}) no-repeat center center;
  background-color: var(--neutral-300-color);
  background-size: 25% auto;
  border: none;
  cursor: pointer;
`;
