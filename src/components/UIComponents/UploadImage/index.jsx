import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import getCroppedImg from "../../../utils/uploadImage";
import noImage from "../../../assets/images/camera.png";
import * as S from "./styled";

const UploadImage = ({ image, uploadImage }) => {
  const [state, setState] = useState({
    image: image,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1,
    rotation: 0,
    croppedAreaPixels: null,
    showModal: false,
    preview: image,
  });

  useEffect(() => {
    setState((state) => ({ ...state, image, preview: image }));
  }, [image]);

  const closeModal = () => {
    setState((state) => ({
      ...state,
      image: image,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 1,
      rotation: 0,
      croppedAreaPixels: null,
      showModal: false,
      preview: null,
    }));
  };

  const onFileChange = (event) => {
    const file = event?.target?.files?.[0] || null;

    let imageUrl = file ? URL.createObjectURL(file) : "";

    setState((state) => ({
      ...state,
      image: imageUrl,
      showModal: true,
    }));
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setState((state) => ({
      ...state,
      croppedAreaPixels,
    }));
  }, []);

  const onCropChange = (crop) => {
    setState((state) => ({
      ...state,
      crop,
    }));
  };

  const onZoomChange = (zoom) => {
    setState((state) => ({
      ...state,
      zoom,
    }));
  };

  const onRotationChange = (rotation) => {
    setState((state) => ({
      ...state,
      rotation,
    }));
  };

  const showImageCropped = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        state.image,
        state.croppedAreaPixels,
        state.rotation
      );

      const urlPreview = URL.createObjectURL(croppedImage);

      uploadImage(urlPreview);

      setState((state) => ({
        ...state,
        showModal: false,
      }));
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line
  }, [state.croppedAreaPixels, state.rotation]);

  const GetAvatar = () => {
    if (state.preview) {
      return <S.Avatar hasImage={true} src={state.preview} alt={"imagem"} />;
    }

    return <S.Avatar src={noImage} alt={"sem imagem"} />;
  };

  return (
    <S.AvatarBox>
      <S.AvatarContent>
        <GetAvatar />

        <S.AvatarForm>
          <S.AvatarUploadImg />
          <S.AvatarUploadFile
            type="file"
            accept="image/*"
            onChange={onFileChange}
          />
        </S.AvatarForm>
      </S.AvatarContent>

      {state.showModal === true && (
        <S.Modal>
          <S.ModalContent>
            <S.ModalClose onClick={(e) => closeModal()}>x</S.ModalClose>
            <S.ModalBody>
              {state.image && (
                <>
                  <S.CropperContent>
                    <Cropper
                      image={state.image}
                      crop={state.crop}
                      zoom={state.zoom}
                      aspect={state.aspect}
                      rotation={state.rotation}
                      onCropChange={onCropChange}
                      onZoomChange={onZoomChange}
                      onRotationChange={onRotationChange}
                      onCropComplete={onCropComplete}
                    />
                  </S.CropperContent>

                  <S.CropperSlider>
                    <S.CropperText>Zoom:</S.CropperText>
                    <Slider
                      value={state.zoom}
                      min={1}
                      max={5}
                      step={0.1}
                      aria-labelledby="Zoom"
                      onChange={(e, zoom) =>
                        setState((state) => ({ ...state, zoom }))
                      }
                    />
                  </S.CropperSlider>

                  <S.CropperSlider>
                    <S.CropperText>Girar:</S.CropperText>
                    <Slider
                      value={state.rotation}
                      min={0}
                      max={360}
                      step={0.1}
                      aria-labelledby="Rotation"
                      onChange={(e, rotation) =>
                        setState((state) => ({ ...state, rotation }))
                      }
                    />
                  </S.CropperSlider>

                  <S.ButtonUpload onClick={() => showImageCropped()}>
                    Salvar imagem
                  </S.ButtonUpload>
                </>
              )}
            </S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.AvatarBox>
  );
};

UploadImage.propTypes = {
  image: PropTypes.any,
  uploadImage: PropTypes.func.isRequired,
};

export default UploadImage;
