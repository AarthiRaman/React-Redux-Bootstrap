import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';

const StyledModal = styled('div')`
  &:after {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "df";
    z-index: 1000;
    background: rgba(0,0,0,0.9);
  }`;

  const StyledDialog = styled(Modal.Dialog)`
    margin: 0 50%;
    position: absolute;
    top: 30%;
    z-index: 300000;
    left: -250px;
    width: 500px;
  `;

  function ModalWindow({
    modalContent,
    showModal,
    onModalClose
  }) {
    return showModal && <StyledModal>
      <StyledDialog>
      <Modal.Header closeButton onClick={() => onModalClose(false, {})}>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body> 
    </StyledDialog>
    </StyledModal>
   
}

export default ModalWindow;
