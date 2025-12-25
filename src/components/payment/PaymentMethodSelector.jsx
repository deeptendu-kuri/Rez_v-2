/**
 * Payment Method Selector
 * Purpose: Allow users to choose payment method
 * UI: UPI, Cards, Net Banking, Wallets
 */

import { useState } from 'react';

const PaymentMethodSelector = ({ onMethodSelect, selectedMethod }) => {
  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: '📱',
      description: 'Pay using any UPI app',
      popular: true,
    },
    {
      id: 'card',
      name: 'Card',
      icon: '💳',
      description: 'Credit or Debit card',
      popular: true,
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      icon: '🏦',
      description: 'All major banks',
      popular: false,
    },
    {
      id: 'wallet',
      name: 'Wallets',
      icon: '👛',
      description: 'Paytm, PhonePe, etc.',
      popular: false,
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      <h3 style={{
        fontSize: '16px',
        fontWeight: '500',
        color: '#1A1A1A',
        marginBottom: '16px',
      }}>
        Select Payment Method
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            onClick={() => onMethodSelect(method.id)}
            style={{
              padding: '16px',
              backgroundColor: selectedMethod === method.id ? '#F0F9FF' : '#FFFFFF',
              border: selectedMethod === method.id ? '2px solid #10B981' : '1px solid #E5E7EB',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.borderColor = '#D1D5DB';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedMethod !== method.id) {
                e.currentTarget.style.borderColor = '#E5E7EB';
              }
            }}
          >
            {/* Icon */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              backgroundColor: selectedMethod === method.id ? '#10B981' : '#F3F4F6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}>
              {method.icon}
            </div>

            {/* Details */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '15px',
                fontWeight: '500',
                color: '#1F2937',
                marginBottom: '2px',
              }}>
                {method.name}
                {method.popular && (
                  <span style={{
                    marginLeft: '8px',
                    fontSize: '11px',
                    color: '#10B981',
                    backgroundColor: '#D1FAE5',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontWeight: '500',
                  }}>
                    POPULAR
                  </span>
                )}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#6B7280',
              }}>
                {method.description}
              </div>
            </div>

            {/* Radio Button */}
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '10px',
              border: `2px solid ${selectedMethod === method.id ? '#10B981' : '#D1D5DB'}`,
              backgroundColor: selectedMethod === method.id ? '#10B981' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {selectedMethod === method.id && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: '#FFFFFF',
                }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
