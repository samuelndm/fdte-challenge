import styled from "styled-components";
import plus from "../../../assets/images/plus.png";

export const AvatarBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: ${({ hasImage }) => (hasImage ? "100%" : "80px")};
  height: ${({ hasImage }) => (hasImage ? "100%" : "auto")};
  border-radius: ${({ hasImage }) => (hasImage ? "50%" : "0")};
`;

export const AvatarForm = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
  right: 10px;
  cursor: pointer;

  &:hover > i {
    background-color: #410c64;
  }
`;

export const AvatarUploadImg = styled.div`
  padding: 5px;
  width: 33px;
  height: 33px;
  background: url(${plus}) no-repeat center center;
  background-size: 50% 50%;
  background-color: var(--action-color);
  border-radius: 50%;
`;

export const AvatarUploadIcon = styled.i`
  padding: 8px;
  border-radius: 50%;
  background-color: #2f276c;
  color: #fff;
  text-decoration: none;
`;

export const AvatarUploadText = styled.div``;

export const AvatarUploadFile = styled.input`
  position: absolute;
  top: 0;
  opacity: 0;
  left: 0;
`;

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  max-width: 480px;
  max-height: 480px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
export const ModalBody = styled.div``;

export const ModalClose = styled.div`
  position: absolute;
  z-index: 9;
  width: 40px;
  line-height: 34px;
  height: 40px;
  background: #2f276c;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 50%;
  top: -20px;
  right: -20px;
  border: 2px solid #fff;
  font-family: monospace;
  cursor: pointer;
  &:hover {
    background-color: #410c64;
  }
`;

export const CropperContent = styled.div`
  position: relative;
  height: 240px;
  margin-bottom: 15px;
  border-radius: 5px;
  overflow: hidden;
`;

export const CropperSlider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const CropperText = styled.div`
  margin-right: 15px;
  font-size: 12px;
  width: 50px;
  text-align: right;
`;

export const ButtonUpload = styled.div`
  display: flex;
  cursor: pointer;
  background: #2f276c;
  color: #fff;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: 100%;
  float: right;
  max-width: 170px;
  &:hover {
    background-color: #410c64;
  }
`;
