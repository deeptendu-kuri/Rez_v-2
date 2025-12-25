/**
 * QR Scanner
 * Purpose: Scan merchant QR codes for payment
 * UI: Camera view, scan result, payment flow
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QRScanner = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [manualCode, setManualCode] = useState('');

  const handleScan = () => {
    setIsScanning(true);

    // Simulate QR code scan
    setTimeout(() => {
      const mockData = {
        merchantId: 'MERCH123456',
        storeName: 'Cafe Delight',
        amount: null,
      };
      setScannedData(mockData);
      setIsScanning(false);
    }, 2000);
  };

  const handleManualEntry = () => {
    if (manualCode.length > 0) {
      const mockData = {
        merchantId: manualCode,
        storeName: 'Manual Entry Store',
        amount: null,
      };
      setScannedData(mockData);
    }
  };

  const handleProceedToPayment = (amount) => {
    navigate('/payment', {
      state: {
        amount: amount || 0,
        orderId: `ORD${Date.now()}`,
        description: `Payment to ${scannedData.storeName}`,
        merchantId: scannedData.merchantId,
        returnUrl: '/',
      }
    });
  };

  if (scannedData) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        padding: '20px',
      }}>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          {/* Success Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '40px',
              backgroundColor: '#D1FAE5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <span style={{ fontSize: '40px' }}>✓</span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              QR Code Scanned!
            </h2>
            <p style={{ fontSize: '15px', color: '#6B7280' }}>
              Ready to make payment
            </p>
          </div>

          {/* Merchant Info */}
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #E5E7EB',
            marginBottom: '24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '28px',
                backgroundColor: '#F3F4F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
              }}>
                🏪
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                  {scannedData.storeName}
                </div>
                <div style={{ fontSize: '12px', color: '#9CA3AF', fontFamily: 'monospace' }}>
                  {scannedData.merchantId}
                </div>
              </div>
            </div>

            {scannedData.amount ? (
              <div style={{
                padding: '16px',
                backgroundColor: '#F0FDF4',
                borderRadius: '8px',
                border: '1px solid #BBF7D0',
              }}>
                <div style={{ fontSize: '13px', color: '#15803D', marginBottom: '4px' }}>
                  Amount
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#16A34A' }}>
                  ₹{scannedData.amount.toLocaleString()}
                </div>
              </div>
            ) : (
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Enter Amount
                </label>
                <input
                  type="number"
                  placeholder="0"
                  style={{
                    width: '100%',
                    padding: '16px',
                    fontSize: '24px',
                    fontWeight: '600',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                    textAlign: 'center',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  id="amount-input"
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <button
              onClick={() => setScannedData(null)}
              style={{
                flex: 1,
                padding: '14px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#374151',
                cursor: 'pointer',
              }}
            >
              Scan Again
            </button>
            <button
              onClick={() => {
                const amountInput = document.getElementById('amount-input');
                const amount = scannedData.amount || (amountInput ? parseFloat(amountInput.value) : 0);
                if (amount > 0) {
                  handleProceedToPayment(amount);
                } else {
                  alert('Please enter an amount');
                }
              }}
              style={{
                flex: 2,
                padding: '14px',
                backgroundColor: '#10B981',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1F2937',
      position: 'relative',
    }}>
      {/* Header */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#FFFFFF',
            fontSize: '18px',
          }}
        >
          ←
        </button>
        <div style={{ fontSize: '16px', fontWeight: '500', color: '#FFFFFF' }}>
          Scan QR Code
        </div>
        <div style={{ width: '40px' }} />
      </div>

      {/* Scanner Area */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        {/* Camera Viewfinder */}
        <div style={{
          width: '100%',
          maxWidth: '400px',
          aspectRatio: '1',
          backgroundColor: '#374151',
          borderRadius: '16px',
          marginBottom: '32px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Scanning Animation */}
          {isScanning && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#10B981',
              animation: 'scan 2s ease-in-out infinite',
            }} />
          )}

          {/* Viewfinder Corners */}
          <div style={{ position: 'absolute', top: '20px', left: '20px', width: '40px', height: '40px', borderTop: '3px solid #10B981', borderLeft: '3px solid #10B981' }} />
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', borderTop: '3px solid #10B981', borderRight: '3px solid #10B981' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '40px', height: '40px', borderBottom: '3px solid #10B981', borderLeft: '3px solid #10B981' }} />
          <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '40px', height: '40px', borderBottom: '3px solid #10B981', borderRight: '3px solid #10B981' }} />

          {/* Center Icon */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📷</div>
            <div style={{ fontSize: '14px', color: '#D1D5DB' }}>
              {isScanning ? 'Scanning...' : 'Position QR code within frame'}
            </div>
          </div>
        </div>

        {/* Scan Button */}
        <button
          onClick={handleScan}
          disabled={isScanning}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '16px',
            backgroundColor: isScanning ? '#6B7280' : '#10B981',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
            color: '#FFFFFF',
            cursor: isScanning ? 'not-allowed' : 'pointer',
            marginBottom: '16px',
          }}
        >
          {isScanning ? 'Scanning...' : 'Start Scanning'}
        </button>

        {/* Manual Entry */}
        <div style={{
          width: '100%',
          maxWidth: '400px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            margin: '20px 0',
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4B5563' }} />
            <span style={{ fontSize: '13px', color: '#9CA3AF' }}>OR</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#4B5563' }} />
          </div>

          <div style={{
            padding: '20px',
            backgroundColor: '#374151',
            borderRadius: '12px',
          }}>
            <label style={{
              display: 'block',
              fontSize: '13px',
              fontWeight: '500',
              color: '#D1D5DB',
              marginBottom: '8px',
            }}>
              Enter merchant code manually
            </label>
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              placeholder="MERCH123456"
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '15px',
                backgroundColor: '#1F2937',
                border: '1px solid #4B5563',
                borderRadius: '8px',
                color: '#FFFFFF',
                outline: 'none',
                marginBottom: '12px',
              }}
              onFocus={(e) => e.target.style.borderColor = '#10B981'}
              onBlur={(e) => e.target.style.borderColor = '#4B5563'}
            />
            <button
              onClick={handleManualEntry}
              disabled={!manualCode}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: manualCode ? '#10B981' : '#4B5563',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#FFFFFF',
                cursor: manualCode ? 'pointer' : 'not-allowed',
              }}
            >
              Continue
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div style={{
          marginTop: '24px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#9CA3AF',
          maxWidth: '400px',
        }}>
          Point your camera at the merchant's QR code to scan and pay instantly
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% { top: 0; }
          50% { top: calc(100% - 4px); }
        }
      `}</style>
    </div>
  );
};

export default QRScanner;
