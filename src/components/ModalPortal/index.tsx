import React from 'react';
import ReactDOM from 'react-dom';

import Styled from './styles';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

const ModalPortal = ({ isOpen, closeModal, children }: Props) => {
  const handleClickDimmed = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const modalElement: React.ReactNode = (
    <Styled.ModalContainer onMouseDown={handleClickDimmed}>
      <Styled.ModalInner>
        <Styled.CrossMarkButton onClick={closeModal}>+</Styled.CrossMarkButton>
        {children}
      </Styled.ModalInner>
    </Styled.ModalContainer>
  );

  return isOpen && ReactDOM.createPortal(modalElement, document.getElementById('modal-root'));
};

export default ModalPortal;
