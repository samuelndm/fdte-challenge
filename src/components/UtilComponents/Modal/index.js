import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Background,
  Content,
  Header,
  Body,
  Footer,
  CloseButton,
  CloseIcon,
} from "./styles";

const Modal = ({
  openModal,
  closeModal,
  size,
  header,
  body,
  footer,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal]);

  const handleCloseModal = (e) => {
    e.preventDefault();

    setIsOpen(false);

    return setTimeout(() => {
      closeModal(false);
    }, 400);
  };

  if (!openModal) return null;
  return (
    <Container>
      <Content size={size} isOpen={isOpen}>
        {children ? (
          <>
            <CloseButton
              hasChildren={children}
              onClick={(e) => handleCloseModal(e)}
            >
              <CloseIcon className='fas fa-times' />
            </CloseButton>

            {children}
          </>
        ) : (
          <>
            <Header>
              {header}

              <CloseButton onClick={(e) => closeModal(false)}>
                <CloseIcon className='fas fa-times' />
              </CloseButton>
            </Header>

            <Body>{body}</Body>

            <Footer>{footer}</Footer>
          </>
        )}
      </Content>

      <Background onClick={(e) => handleCloseModal(e)} />
    </Container>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element,
};

export default Modal;
