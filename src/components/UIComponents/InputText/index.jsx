import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const InputText = ({
  className,
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
}) => (
  <S.InputTextWrapper className={className}>
    {label && <S.Label>{label}</S.Label>}

    <S.Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </S.InputTextWrapper>
);

InputText.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
