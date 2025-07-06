
import React from 'react';
import styled from 'styled-components';
import PaystackPop from '@paystack/inline-js'; // Ensure you have installed @paystack/inline-js
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: linear-gradient(135deg, #f0f8ff, #e6f2ff);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideIn 0.4s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalTitle = styled.h2`
  color: #333;
  margin-bottom: 25px;
  font-size: 28px;
  font-weight: 700;
`;

const PayButton = styled.button`
  background: #3bb75e;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: #2ea44f;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #333;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
`;

const PaystackModal = ({ isOpen, onClose, amount, email, name, showAlert }) => {
const navigate = useNavigate();


  if (!isOpen) return null;

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
        //   key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
  key: "pk_live_afb3375b9a770a5a332904dcf1a26e77c2a5f170",
      amount: amount * 100, // Amount in kobo
      email: email,
      firstname: name,
      onSuccess: (transaction) => {
        console.log("Paystack transaction successful:", transaction);
        // Placeholder for postOrderFunction and sendOrderEmailFunction
        // postOrderFunction(transaction.reference);
        // sendOrderEmailFunction(transaction.reference);
        
        // showAlert('success', `Payment successful! Renewal processes shall be completed within 24hrs`);
        Swal.fire({icon:"success", 
            text:"Payment successful! Renewal processes shall be completed within 24hrs", 
            allowOutsideClick:false}).then((result)=>{if(result.isConfirmed){
navigate('/');
            }});
        
        onClose();
      },
      onCancel: () => {
        console.log("Paystack payment cancelled.");
        showAlert('error', "Payment cancelled.");
        onClose();
      },
      onError: (error) => {
        console.error("Paystack payment failed:", error);
        showAlert('error', `Payment failed: ${error.message}`);
        onClose();
      }
    });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Proceed with Paystack</ModalTitle>
        <InfoText>
          You are about to pay ₦{amount.toLocaleString()} for your renewal.
          <br />
          Click the button below to complete your payment securely via Paystack.
        </InfoText>
        <PayButton onClick={payWithPaystack}>Pay ₦{amount.toLocaleString()}</PayButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PaystackModal;