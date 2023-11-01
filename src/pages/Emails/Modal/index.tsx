import React from 'react';
import { CloseButton, ModalContent, ModalOverlay } from '../styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal:React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    return (
      <ModalOverlay isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          {children}
        </ModalContent>
      </ModalOverlay>
    );
  };
export default Modal;
