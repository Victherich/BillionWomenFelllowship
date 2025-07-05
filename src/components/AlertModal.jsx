
import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MessageIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${props => {
    switch (props.type) {
      case 'success': return '#28a745';
      case 'error': return '#dc3545';
      case 'info': return '#007bff';
      default: return '#6c757d';
    }
  }};
`;

const MessageText = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 25px;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const AlertModal = ({ show, type, message, onClose }) => {
  if (!show) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      default: return '💬';
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <MessageIcon type={type}>{getIcon()}</MessageIcon>
        <MessageText>{message}</MessageText>
        <CloseButton onClick={onClose}>OK</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AlertModal;