/**
 * Card Payment Component
 * Purpose: Credit/Debit card payment interface
 * UI: Card details form with validation
 */

import { useState } from 'react';

const CardPayment = ({ amount, onSuccess, onCancel }) => {
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const handleInputChange = (field, value) => {
    let formattedValue = value;

    if (field === 'number') {
      formattedValue = formatCardNumber(value);
    } else if (field === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (field === 'cvv') {
      formattedValue = value.replace(/[^0-9]/gi, '').slice(0, 3);
    } else if (field === 'name') {
      formattedValue = value.toUpperCase();
    }

    setCardDetails({ ...cardDetails, [field]: formattedValue });
  };

  const isFormValid = () => {
    return (
      cardDetails.number.replace(/\s/g, '').length === 16 &&
      cardDetails.name.length > 0 &&
      cardDetails.expiry.length === 5 &&
      cardDetails.cvv.length === 3
    );
  };

  const handlePay = () => {
    if (!isFormValid()) {
      alert('Please fill all card details correctly');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess({
        method: 'card',
        cardNumber: cardDetails.number.slice(-4),
        amount,
        transactionId: `CARD${Date.now()}`,
        saved: saveCard,
      });
    }, 2000);
  };

  const getCardType = () => {
    const number = cardDetails.number.replace(/\s/g, '');
    if (number.startsWith('4')) return { type: 'Visa', icon: '💳', color: '#1A1F71' };
    if (number.startsWith('5')) return { type: 'Mastercard', icon: '💳', color: '#EB001B' };
    if (number.startsWith('3')) return { type: 'Amex', icon: '💳', color: '#006FCF' };
    return { type: 'Card', icon: '💳', color: '#6B7280' };
  };

  const cardType = getCardType();

  return (
    <div style={{ width: '100%' }}>
      {/* Card Preview */}
      <div style={{
        padding: '24px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        marginBottom: '24px',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#FFFFFF',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '24px' }}>💳</span>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>{cardType.type}</span>
        </div>

        <div style={{ marginTop: '32px' }}>
          <div style={{
            fontSize: '20px',
            letterSpacing: '2px',
            fontFamily: 'monospace',
            marginBottom: '16px',
          }}>
            {cardDetails.number || '•••• •••• •••• ••••'}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '10px', opacity: 0.7, marginBottom: '4px' }}>CARD HOLDER</div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                {cardDetails.name || 'YOUR NAME'}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '10px', opacity: 0.7, marginBottom: '4px' }}>EXPIRES</div>
              <div style={{ fontSize: '14px', fontWeight: '500' }}>
                {cardDetails.expiry || 'MM/YY'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Number */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          Card Number
        </label>
        <input
          type="text"
          value={cardDetails.number}
          onChange={(e) => handleInputChange('number', e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '15px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            outline: 'none',
            fontFamily: 'monospace',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
        />
      </div>

      {/* Card Holder Name */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          Card Holder Name
        </label>
        <input
          type="text"
          value={cardDetails.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder="JOHN DOE"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '15px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = '#667eea'}
          onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
        />
      </div>

      {/* Expiry & CVV */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px',
          }}>
            Expiry Date
          </label>
          <input
            type="text"
            value={cardDetails.expiry}
            onChange={(e) => handleInputChange('expiry', e.target.value)}
            placeholder="MM/YY"
            maxLength="5"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '15px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              outline: 'none',
              fontFamily: 'monospace',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
          />
        </div>
        <div>
          <label style={{
            display: 'block',
            fontSize: '14px',
            fontWeight: '500',
            color: '#374151',
            marginBottom: '8px',
          }}>
            CVV
          </label>
          <input
            type="password"
            value={cardDetails.cvv}
            onChange={(e) => handleInputChange('cvv', e.target.value)}
            placeholder="123"
            maxLength="3"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '15px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              outline: 'none',
              fontFamily: 'monospace',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
          />
        </div>
      </div>

      {/* Save Card */}
      <div
        onClick={() => setSaveCard(!saveCard)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px',
          backgroundColor: '#F9FAFB',
          borderRadius: '8px',
          marginBottom: '24px',
          cursor: 'pointer',
        }}
      >
        <div style={{
          width: '20px',
          height: '20px',
          borderRadius: '4px',
          border: `2px solid ${saveCard ? '#667eea' : '#D1D5DB'}`,
          backgroundColor: saveCard ? '#667eea' : '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {saveCard && <span style={{ color: '#FFFFFF', fontSize: '12px' }}>✓</span>}
        </div>
        <span style={{ fontSize: '14px', color: '#374151' }}>
          Save this card for future payments
        </span>
      </div>

      {/* Amount Display */}
      <div style={{
        padding: '16px',
        backgroundColor: '#F9FAFB',
        borderRadius: '8px',
        marginBottom: '24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '14px', color: '#6B7280' }}>Amount to pay</span>
        <span style={{ fontSize: '20px', fontWeight: '600', color: '#1F2937' }}>
          ₹{amount.toLocaleString()}
        </span>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={onCancel}
          disabled={isProcessing}
          style={{
            flex: 1,
            padding: '14px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            color: '#374151',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            opacity: isProcessing ? 0.5 : 1,
          }}
        >
          Cancel
        </button>
        <button
          onClick={handlePay}
          disabled={isProcessing || !isFormValid()}
          style={{
            flex: 2,
            padding: '14px',
            backgroundColor: !isFormValid() || isProcessing ? '#D1D5DB' : '#667eea',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            color: '#FFFFFF',
            cursor: !isFormValid() || isProcessing ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
          }}
        >
          {isProcessing ? 'Processing...' : `Pay ₹${amount.toLocaleString()}`}
        </button>
      </div>

      {/* Security Info */}
      <div style={{
        marginTop: '16px',
        padding: '12px',
        backgroundColor: '#ECFDF5',
        borderRadius: '8px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}>
        <span style={{ fontSize: '16px' }}>🔒</span>
        <span style={{ fontSize: '12px', color: '#047857' }}>
          Your card details are encrypted and secure
        </span>
      </div>
    </div>
  );
};

export default CardPayment;
