import React from "react";
import PropTypes from "prop-types";
import { useCurrentPokemonContext } from "contexts";
import * as UI from "../../../../UIComponents";

const Edit = ({ sprites }) => {
  const { setCurrentPokemon } = useCurrentPokemonContext();

  const uploadImage = (image) => {
    setCurrentPokemon((pokemon) => ({
      ...pokemon,
      sprites: { ...sprites, front_default: image },
    }));
  };

  return (
    <UI.UploadImage image={sprites?.front_default} uploadImage={uploadImage} />
  );
};

Edit.propTypes = {
  sprites: PropTypes.object.isRequired,
};

export default Edit;
