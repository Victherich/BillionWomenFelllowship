
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PaystackModal from './PaystackModal';
import PayPalModal from './PayPalModal';
import AlertModal from './AlertModal';

// Global Styles for a clean base
const GlobalStyle = createGlobalStyle`
  
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 100px 20px;
    box-sizing: border-box;
    width:100%;
  
`;

const Container = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  padding: 40px 50px;
  width: 100%;
  max-width: 650px;
  text-align: center;
  border: 1px solid #e0e0e0;
  margin:0 auto;
  padding:100px 20px;
`;

const Title = styled.h1`
  font-size: 2.8em;
  color: #2c3e50;
  margin-bottom: 35px;
  font-weight: 800;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.8em;
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: left;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px dashed #e9ecef;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.span`
  font-size: 1.2em;
  color: #555;
  font-weight: 500;
`;

const ItemAmount = styled.span`
  font-size: 1.2em;
  color: #007bff;
  font-weight: 600;
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-top: 2px solid #ddd;
  margin-top: 25px;
`;

const TotalText = styled.span`
  font-size: 1.6em;
  color: #2c3e50;
  font-weight: 700;
`;

const TotalAmount = styled.span`
  font-size: 1.8em;
  color: #28a745;
  font-weight: 800;
`;

const PaymentMethodContainer = styled.div`
  margin-top: 35px;
  text-align: left;
`;

const PaymentLabel = styled.label`
  font-size: 1.3em;
  color: #444;
  margin-right: 15px;
  font-weight: 600;
`;

const PaymentSelect = styled.select`
  padding: 12px 18px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1em;
  min-width: 200px;
  appearance: none; /* Remove default arrow */
  background: white url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13%205.4l-123%20123.5-123-123.5a17.6%2017.6%200%200%0a0-24.6c-6.8-6.8-17.7-6.8-24.5%200-6.8%206.8-6.8%2017.7%200%2024.5l135.3%20135.3c6.8%206.8%2017.7%206.8%2024.5%200L287%2094c6.8-6.8%206.8-17.7%200-24.5-.4-.5-1.2-1-1.7-1.4z%22%2F%3E%3C%2Fsvg%3E') no-repeat right 15px center;
  background-size: 12px;
  cursor: pointer;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const ProceedButton = styled.button`
  background: linear-gradient(45deg, #007bff, #0056b3);
  color: white;
  border: none;
  padding: 15px 35px;
  border-radius: 10px;
  font-size: 1.4em;
  font-weight: 700;
  cursor: pointer;
  margin-top: 40px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    background: linear-gradient(45deg, #0056b3, #003a72);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.2);
  }
`;

function HostingRenewal() {
  const hostingAmount = 30000; // NGN
  const domainAmount = 30000;   // NGN
  const totalAmount = hostingAmount + domainAmount;

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showPaystackModal, setShowPaystackModal] = useState(false);
  const [showPayPalModal, setShowPayPalModal] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', message: '' });

  // Dummy delivery details for payment modals (replace with actual client data)
  const deliveryDetails = {
    email: "billionwomenfellowship@gmail.com",
    name: "Billion women fellowship"
  };

  const handleProceedToPayment = () => {
    if (selectedPaymentMethod === 'paystack') {
      setShowPaystackModal(true);
    } else if (selectedPaymentMethod === 'paypal') {
      setShowPayPalModal(true);
    } else {
      showAlert('info', 'Please select a payment method.');
    }
  };

  const showAlert = (type, message) => {
    setAlert({ show: true, type, message });
  };

  const closeAlert = () => {
    setAlert({ show: false, type: '', message: '' });
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Domain and Hosting Renewal</Title>

        <SectionTitle>Renewal Details</SectionTitle>
        <Item>
          <ItemName>Standard Hosting</ItemName>
          <ItemAmount>₦{hostingAmount.toLocaleString()}</ItemAmount>
        </Item>
        <Item>
          <ItemName>Domain Name (billionwomwnfellowship.com)</ItemName>
          <ItemAmount>₦{domainAmount.toLocaleString()}</ItemAmount>
        </Item>

        <TotalContainer>
          <TotalText>Total:</TotalText>
          <TotalAmount>₦{totalAmount.toLocaleString()}</TotalAmount>
        </TotalContainer>

        <PaymentMethodContainer>
          <PaymentLabel htmlFor="paymentMethod">Select Payment Method:</PaymentLabel>
          <PaymentSelect
            id="paymentMethod"
            value={selectedPaymentMethod}
            onChange={(e) => setSelectedPaymentMethod(e.target.value)}
          >
            <option value="">-- Choose --</option>
            <option value="paystack">Paystack</option>
            <option value="paypal">PayPal</option>
          </PaymentSelect>
        </PaymentMethodContainer>

        <ProceedButton onClick={handleProceedToPayment}>
          Proceed to Payment
        </ProceedButton>
      </Container>

      <PaystackModal
        isOpen={showPaystackModal}
        onClose={() => setShowPaystackModal(false)}
        amount={totalAmount}
        email={deliveryDetails.email}
        name={deliveryDetails.name}
        showAlert={showAlert}
      />

      <PayPalModal
        isOpen={showPayPalModal}
        onClose={() => setShowPayPalModal(false)}
        amount={totalAmount}
        showAlert={showAlert}
      />

      <AlertModal
        show={alert.show}
        type={alert.type}
        message={alert.message}
        onClose={closeAlert}
      />
    </>
  );
}

export default HostingRenewal;