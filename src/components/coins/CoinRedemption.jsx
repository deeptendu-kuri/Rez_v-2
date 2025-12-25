/**
 * Coin Redemption Component
 * Purpose: Allow users to apply ReZ coins during checkout
 * UI: Coin balance, slider, apply/remove coins, mixed payment display
 */

import { useState, useEffect } from 'react';

const CoinRedemption = ({
  totalAmount,
  onCoinsApplied,
  userCoins = 0,
  maxCoinsAllowed = null, // Optional: limit coins that can be used
  minOrderAmount = 0, // Minimum order amount to use coins
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [coinsToUse, setCoinsToUse] = useState(0);
  const [isApplied, setIsApplied] = useState(false);

  // Calculate maximum coins that can be used
  const getMaxUsableCoins = () => {
    let max = Math.min(userCoins, totalAmount);
    if (maxCoinsAllowed) {
      max = Math.min(max, maxCoinsAllowed);
    }
    // Typically, allow up to 50% of order value to be paid with coins
    const fiftyPercent = Math.floor(totalAmount * 0.5);
    return Math.min(max, fiftyPercent);
  };

  const maxUsableCoins = getMaxUsableCoins();

  const handleApplyCoins = () => {
    if (coinsToUse === 0) {
      alert('Please select coins to apply');
      return;
    }
    setIsApplied(true);
    onCoinsApplied && onCoinsApplied(coinsToUse);
  };

  const handleRemoveCoins = () => {
    setIsApplied(false);
    setCoinsToUse(0);
    onCoinsApplied && onCoinsApplied(0);
  };

  const handleMaxCoins = () => {
    setCoinsToUse(maxUsableCoins);
  };

  useEffect(() => {
    if (isApplied && coinsToUse === 0) {
      setIsApplied(false);
      onCoinsApplied && onCoinsApplied(0);
    }
  }, [coinsToUse, isApplied, onCoinsApplied]);

  if (userCoins === 0) {
    return (
      <div style={{
        padding: '16px',
        backgroundColor: '#F9FAFB',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🪙</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#6B7280' }}>
              No ReZ Coins available
            </div>
            <div style={{ fontSize: '12px', color: '#9CA3AF', marginTop: '2px' }}>
              Shop more to earn coins and save on future orders
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (totalAmount < minOrderAmount) {
    return (
      <div style={{
        padding: '16px',
        backgroundColor: '#FEF3C7',
        borderRadius: '12px',
        border: '1px solid #FDE68A',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🪙</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#92400E' }}>
              You have {userCoins} coins
            </div>
            <div style={{ fontSize: '12px', color: '#B45309', marginTop: '2px' }}>
              Minimum order of ₹{minOrderAmount} required to use coins
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isApplied) {
    return (
      <div style={{
        padding: '16px',
        backgroundColor: '#D1FAE5',
        borderRadius: '12px',
        border: '1px solid #BBF7D0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <span style={{ fontSize: '24px' }}>✓</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#047857' }}>
              {coinsToUse} coins applied
            </div>
            <div style={{ fontSize: '12px', color: '#065F46', marginTop: '2px' }}>
              You saved ₹{coinsToUse} on this order!
            </div>
          </div>
          <button
            onClick={handleRemoveCoins}
            style={{
              padding: '6px 12px',
              backgroundColor: '#FFFFFF',
              color: '#047857',
              border: '1px solid #BBF7D0',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>

        {/* Mixed Payment Display */}
        <div style={{
          padding: '12px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          display: 'flex',
          gap: '8px',
          fontSize: '13px',
        }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ color: '#6B7280', marginBottom: '4px' }}>Coins</div>
            <div style={{ fontWeight: '600', color: '#10B981' }}>₹{coinsToUse}</div>
          </div>
          <div style={{ width: '1px', backgroundColor: '#E5E7EB' }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ color: '#6B7280', marginBottom: '4px' }}>To Pay</div>
            <div style={{ fontWeight: '600', color: '#1F2937' }}>₹{(totalAmount - coinsToUse).toLocaleString()}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      border: '1px solid #E5E7EB',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          backgroundColor: isExpanded ? '#F9FAFB' : '#FFFFFF',
        }}
      >
        <span style={{ fontSize: '24px' }}>🪙</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
            Use ReZ Coins
          </div>
          <div style={{ fontSize: '12px', color: '#10B981', marginTop: '2px' }}>
            {userCoins} coins available • Save up to ₹{maxUsableCoins}
          </div>
        </div>
        <span style={{ fontSize: '18px', color: '#6B7280', transition: 'transform 0.2s', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▼
        </span>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div style={{
          padding: '16px',
          borderTop: '1px solid #E5E7EB',
          backgroundColor: '#F9FAFB',
        }}>
          {/* Coin Slider */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', color: '#6B7280' }}>
                Using {coinsToUse} coins
              </span>
              <button
                onClick={handleMaxCoins}
                style={{
                  padding: '2px 8px',
                  backgroundColor: '#10B981',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Use Max
              </button>
            </div>

            <input
              type="range"
              min="0"
              max={maxUsableCoins}
              step="10"
              value={coinsToUse}
              onChange={(e) => setCoinsToUse(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                outline: 'none',
                background: `linear-gradient(to right, #10B981 0%, #10B981 ${(coinsToUse / maxUsableCoins) * 100}%, #E5E7EB ${(coinsToUse / maxUsableCoins) * 100}%, #E5E7EB 100%)`,
              }}
            />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '11px',
              color: '#9CA3AF',
              marginTop: '4px',
            }}>
              <span>0</span>
              <span>{maxUsableCoins}</span>
            </div>
          </div>

          {/* Savings Display */}
          {coinsToUse > 0 && (
            <div style={{
              padding: '12px',
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
              marginBottom: '12px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: '#6B7280' }}>Original Amount</span>
                <span style={{ color: '#1F2937', textDecoration: 'line-through' }}>
                  ₹{totalAmount.toLocaleString()}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: '#10B981' }}>Coin Discount</span>
                <span style={{ color: '#10B981', fontWeight: '500' }}>
                  -₹{coinsToUse}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '14px',
                paddingTop: '8px',
                borderTop: '1px solid #E5E7EB',
              }}>
                <span style={{ color: '#1F2937', fontWeight: '500' }}>Amount to Pay</span>
                <span style={{ color: '#10B981', fontWeight: '700' }}>
                  ₹{(totalAmount - coinsToUse).toLocaleString()}
                </span>
              </div>
            </div>
          )}

          {/* Info Box */}
          <div style={{
            padding: '12px',
            backgroundColor: '#EFF6FF',
            borderRadius: '8px',
            marginBottom: '12px',
          }}>
            <div style={{ fontSize: '12px', color: '#1E40AF' }}>
              💡 <strong>Good to know:</strong>
            </div>
            <ul style={{ margin: '4px 0 0 0', paddingLeft: '20px', fontSize: '11px', color: '#1E3A8A' }}>
              <li>1 coin = ₹1 discount</li>
              <li>Use up to 50% of order value</li>
              <li>Remaining: {userCoins - coinsToUse} coins after this order</li>
            </ul>
          </div>

          {/* Apply Button */}
          <button
            onClick={handleApplyCoins}
            disabled={coinsToUse === 0}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: coinsToUse === 0 ? '#D1D5DB' : '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: coinsToUse === 0 ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s',
            }}
          >
            {coinsToUse === 0 ? 'Select coins to apply' : `Apply ${coinsToUse} coins & Save ₹${coinsToUse}`}
          </button>
        </div>
      )}
    </div>
  );
};

export default CoinRedemption;
