/**
 * UPI Payment Component
 * Purpose: UPI payment interface
 * UI: UPI ID input, QR code, popular apps
 */

import { useState } from 'react';

const UPIPayment = ({ amount, onSuccess, onCancel }) => {
  const [upiId, setUpiId] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const upiApps = [
    { id: 'gpay', name: 'Google Pay', icon: '🟢', color: '#34A853' },
    { id: 'phonepe', name: 'PhonePe', icon: '🟣', color: '#5F259F' },
    { id: 'paytm', name: 'Paytm', icon: '🔵', color: '#00BAF2' },
    { id: 'bhim', name: 'BHIM', icon: '🔴', color: '#ED1C24' },
  ];

  const handlePay = () => {
    if (!upiId && !selectedApp) {
      alert('Please enter UPI ID or select an app');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess({
        method: 'upi',
        upiId: upiId || selectedApp,
        amount,
        transactionId: `UPI${Date.now()}`,
      });
    }, 2000);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* UPI Apps */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          fontSize: '14px',
          fontWeight: '500',
          color: '#6B7280',
          marginBottom: '12px',
        }}>
          Pay using your UPI app
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '12px',
        }}>
          {upiApps.map((app) => (
            <div
              key={app.id}
              onClick={() => setSelectedApp(app.id)}
              style={{
                padding: '16px 8px',
                backgroundColor: selectedApp === app.id ? `${app.color}15` : '#F9FAFB',
                border: selectedApp === app.id ? `2px solid ${app.color}` : '1px solid #E5E7EB',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{app.icon}</div>
              <div style={{
                fontSize: '12px',
                color: '#4B5563',
                fontWeight: '500',
              }}>
                {app.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: '24px 0',
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
        <span style={{ fontSize: '13px', color: '#9CA3AF' }}>OR</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E7EB' }} />
      </div>

      {/* UPI ID Input */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          Enter UPI ID
        </label>
        <input
          type="text"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="example@upi"
          style={{
            width: '100%',
            padding: '12px 16px',
            fontSize: '15px',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => e.target.style.borderColor = '#10B981'}
          onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
        />
        <div style={{
          fontSize: '12px',
          color: '#6B7280',
          marginTop: '6px',
        }}>
          Enter your UPI ID (e.g., yourname@paytm, yourname@phonepe)
        </div>
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
          disabled={isProcessing || (!upiId && !selectedApp)}
          style={{
            flex: 2,
            padding: '14px',
            backgroundColor: (!upiId && !selectedApp) || isProcessing ? '#D1D5DB' : '#10B981',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            color: '#FFFFFF',
            cursor: (!upiId && !selectedApp) || isProcessing ? 'not-allowed' : 'pointer',
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
          Your payment is 100% secure and encrypted
        </span>
      </div>
    </div>
  );
};

export default UPIPayment;
