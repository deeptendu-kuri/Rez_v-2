/**
 * QR Code Generator
 * Purpose: Generate QR codes for merchants
 * UI: QR display, download options, customization
 */

import { useState } from 'react';

const QRGenerator = ({ merchantId, storeName, amount }) => {
  const [qrSize, setQrSize] = useState('medium');
  const [includeAmount, setIncludeAmount] = useState(!!amount);

  // In production, this would generate actual QR code using a library like qrcode.react
  // For now, we'll show a placeholder
  const qrData = {
    merchantId,
    storeName,
    amount: includeAmount ? amount : null,
    timestamp: Date.now(),
  };

  const sizes = {
    small: { size: 200, label: 'Small (200x200)' },
    medium: { size: 300, label: 'Medium (300x300)' },
    large: { size: 400, label: 'Large (400x400)' },
  };

  const handleDownload = (format) => {
    // In production: Generate and download QR code
    alert(`Downloading QR code as ${format.toUpperCase()}`);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ width: '100%' }}>
      {/* QR Code Display */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '32px',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        marginBottom: '24px',
        textAlign: 'center',
      }}>
        {/* Store Name */}
        <div style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1F2937',
          marginBottom: '16px',
        }}>
          {storeName}
        </div>

        {/* QR Code Placeholder */}
        <div style={{
          width: sizes[qrSize].size,
          height: sizes[qrSize].size,
          margin: '0 auto 16px',
          backgroundColor: '#F9FAFB',
          border: '2px dashed #D1D5DB',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{ fontSize: '64px' }}>📱</div>
          <div style={{ fontSize: '14px', color: '#6B7280' }}>
            QR Code Preview
          </div>
          <div style={{
            fontSize: '11px',
            color: '#9CA3AF',
            fontFamily: 'monospace',
            maxWidth: '80%',
            wordBreak: 'break-all',
          }}>
            {merchantId}
          </div>
        </div>

        {/* Amount Display */}
        {includeAmount && amount && (
          <div style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#10B981',
            marginBottom: '8px',
          }}>
            ₹{amount.toLocaleString()}
          </div>
        )}

        {/* Instructions */}
        <div style={{
          fontSize: '13px',
          color: '#6B7280',
          lineHeight: '1.6',
        }}>
          Scan this QR code with ReZ app to make payment
        </div>
      </div>

      {/* Size Selection */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          QR Code Size
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          {Object.entries(sizes).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setQrSize(key)}
              style={{
                flex: 1,
                padding: '10px',
                backgroundColor: qrSize === key ? '#10B981' : '#FFFFFF',
                border: `1px solid ${qrSize === key ? '#10B981' : '#D1D5DB'}`,
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '500',
                color: qrSize === key ? '#FFFFFF' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {value.label}
            </button>
          ))}
        </div>
      </div>

      {/* Amount Toggle */}
      {amount && (
        <div
          onClick={() => setIncludeAmount(!includeAmount)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            backgroundColor: '#F9FAFB',
            borderRadius: '8px',
            marginBottom: '20px',
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '4px',
            border: `2px solid ${includeAmount ? '#10B981' : '#D1D5DB'}`,
            backgroundColor: includeAmount ? '#10B981' : '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {includeAmount && <span style={{ color: '#FFFFFF', fontSize: '12px' }}>✓</span>}
          </div>
          <span style={{ fontSize: '14px', color: '#374151' }}>
            Include amount in QR code
          </span>
        </div>
      )}

      {/* Download Options */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          fontSize: '14px',
          fontWeight: '500',
          color: '#374151',
          marginBottom: '8px',
        }}>
          Download Options
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <button
            onClick={() => handleDownload('png')}
            style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
          >
            PNG
          </button>
          <button
            onClick={() => handleDownload('svg')}
            style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
          >
            SVG
          </button>
          <button
            onClick={() => handleDownload('pdf')}
            style={{
              padding: '10px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#10B981'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}
          >
            PDF
          </button>
        </div>
      </div>

      {/* Print Button */}
      <button
        onClick={handlePrint}
        style={{
          width: '100%',
          padding: '14px',
          backgroundColor: '#10B981',
          border: 'none',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '500',
          color: '#FFFFFF',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10B981'}
      >
        🖨️ Print QR Code
      </button>

      {/* Tips */}
      <div style={{
        marginTop: '20px',
        padding: '16px',
        backgroundColor: '#F0F9FF',
        borderRadius: '8px',
      }}>
        <div style={{ fontSize: '13px', fontWeight: '500', color: '#0369A1', marginBottom: '8px' }}>
          💡 Tips for using QR codes:
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12px', color: '#075985', lineHeight: '1.8' }}>
          <li>Print and display at your counter</li>
          <li>Ensure good lighting for easy scanning</li>
          <li>Place at eye level for customers</li>
          <li>Keep the code clean and undamaged</li>
        </ul>
      </div>
    </div>
  );
};

export default QRGenerator;
