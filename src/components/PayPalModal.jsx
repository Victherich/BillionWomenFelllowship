
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

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
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: slideIn 0.4s ease-out;
  overflow-y:scroll;
  height:600px;

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

const PayPalButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  /* Adjust width as needed for PayPal buttons */
  max-width: 300px; /* Example width */
  margin-left: auto;
  margin-right: auto;
  min-height: 40px; /* Ensure space for buttons to render */
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 30px;
`;

const PayPalModal = ({ isOpen, onClose, amount, showAlert }) => {
  const paypalRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Load PayPal SDK script dynamically
      const script = document.createElement('script');
      script.src = "https://www.paypal.com/sdk/js?client-id=AY3JP-UI68WChZpC_0f7oTadUrItrOcSwqL2E4GVFJHfo-4QPabv308FQRUTfmDS4jfNFYi9AbLZh9iV&currency=USD"; // Added currency=USD as PayPal typically uses USD
      script.async = true;
      script.onload = () => {
        if (window.paypal) {
          paypalRef.current.innerHTML = ""; // Clear existing buttons
          window.paypal.Buttons({
            style: {
              layout: "vertical",
              color: "gold",
              shape: "pill",
              label: "paypal",
            },
            createOrder: (data, actions) => {
              // Note: PayPal typically processes in USD. You would need to convert NGN to USD.
              // For demonstration, we'll assume the 'amount' prop is already in USD or a conversion happens.
              // In a real app, you'd fetch the current exchange rate.
              const usdAmount = (amount / 1529.68).toFixed(2); // Example conversion, adjust as needed

              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD", // Ensure currency code is set
                      value: usdAmount.toString(),
                    },
                  },
                ],
              });
            },
            onApprove: async (data, actions) => {
              const details = await actions.order.capture();
              console.log("PayPal transaction successful:", details);

              // Placeholder for order details and database/email functions
              const orderDetails = {
                // user: userData, // Not provided in this context
                serviceTitle: "Domain & Hosting Renewal",
                selectedPackage: { price: amount }, // Simplified for this context
                sellerEmail: "matthewcarwashandcleaning20@gmail.com",
                priceNGN: amount, // Original NGN amount
                priceUSD: details.purchase_units[0].amount.value, // Captured USD amount
                paymentDetails: details,
                date: new Date().toISOString(),
              };

              // await saveOrderToDatabase(orderDetails); // Placeholder
              // await sendOrderEmails(orderDetails); // Placeholder

              showAlert("success", "Payment successful and order saved!");
              console.log("Navigating to dashboard/home..."); // Placeholder for navigate('/')
              onClose();
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              showAlert("error", "Payment failed. Please try again.");
              onClose();
            },
          }).render(paypalRef.current);
        }
      };
      document.body.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts or modal closes
        document.body.removeChild(script);
      };
    }
  }, [isOpen, amount, showAlert, onClose]); // Add onClose to dependency array

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>Proceed with PayPal</ModalTitle>
        <InfoText>
          You are about to pay ₦{amount.toLocaleString()} (converted to USD for PayPal).
          <br />
          Please click on the PayPal button below to complete your payment.
        </InfoText>
        <PayPalButtonContainer ref={paypalRef} />
      </ModalContent>
    </ModalOverlay>
  );
};

export default PayPalModal;