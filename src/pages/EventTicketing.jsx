/**
 * Event Ticketing
 * Purpose: Complete ticket booking flow with seat/quantity selection
 * UI: Event details, ticket types, quantity selector, attendee info
 */

import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EventTicketing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { event } = location.state || {};

  const [step, setStep] = useState(1); // 1: Select tickets, 2: Attendee info, 3: Review
  const [selectedTickets, setSelectedTickets] = useState({});
  const [attendeeInfo, setAttendeeInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [applyCoins, setApplyCoins] = useState(false);
  const [coinsToUse, setCoinsToUse] = useState(0);

  // Mock event data
  const eventData = event || {
    id: 1,
    name: 'Sunburn Arena ft. Alan Walker',
    date: 'Dec 31, 2024',
    time: '8:00 PM',
    venue: 'Phoenix Marketcity, Bangalore',
    image: '🎵',
    ticketTypes: [
      {
        id: 'general',
        name: 'General Admission',
        price: 1499,
        available: 150,
        description: 'Standing area with full event access',
      },
      {
        id: 'vip',
        name: 'VIP Pass',
        price: 3499,
        available: 50,
        description: 'Premium seating, complimentary drinks, early entry',
      },
      {
        id: 'couple',
        name: 'Couple Pack',
        price: 2499,
        available: 30,
        description: '2 General Admission tickets at discounted price',
        quantity: 2,
      },
    ],
  };

  const userCoins = 500;

  const handleTicketChange = (ticketId, quantity) => {
    setSelectedTickets({
      ...selectedTickets,
      [ticketId]: quantity,
    });
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce((sum, qty) => sum + (qty || 0), 0);
  };

  const getTotalAmount = () => {
    let total = 0;
    Object.entries(selectedTickets).forEach(([ticketId, quantity]) => {
      const ticket = eventData.ticketTypes.find(t => t.id === ticketId);
      if (ticket && quantity > 0) {
        total += ticket.price * quantity;
      }
    });
    return total;
  };

  const handleContinue = () => {
    if (step === 1) {
      if (getTotalTickets() === 0) {
        alert('Please select at least one ticket');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!attendeeInfo.name || !attendeeInfo.email || !attendeeInfo.phone) {
        alert('Please fill all attendee details');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Proceed to payment
      navigate('/payment', {
        state: {
          amount: getTotalAmount(),
          coins: applyCoins ? coinsToUse : 0,
          orderId: `EVT${Date.now()}`,
          description: `Tickets for ${eventData.name}`,
          returnUrl: '/my-tickets',
        },
      });
    }
  };

  if (!event && !eventData) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#F9FAFB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎫</div>
          <h2 style={{ fontSize: '20px', color: '#1F2937', marginBottom: '8px' }}>
            No Event Selected
          </h2>
          <button
            onClick={() => navigate('/events')}
            style={{
              marginTop: '16px',
              padding: '12px 24px',
              backgroundColor: '#10B981',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Browse Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9FAFB',
      paddingBottom: '100px',
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '16px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <button
            onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#F9FAFB',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '18px' }}>←</span>
          </button>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0 }}>
              {step === 1 && 'Select Tickets'}
              {step === 2 && 'Attendee Information'}
              {step === 3 && 'Review & Pay'}
            </h1>
            <p style={{ fontSize: '13px', color: '#6B7280', margin: '2px 0 0 0' }}>
              Step {step} of 3
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          height: '4px',
          backgroundColor: '#E5E7EB',
          borderRadius: '2px',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${(step / 3) * 100}%`,
            height: '100%',
            backgroundColor: '#10B981',
            transition: 'width 0.3s',
          }} />
        </div>
      </div>

      {/* Event Header */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '20px',
      }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '12px',
            backgroundColor: '#F3F4F6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
          }}>
            {eventData.image}
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '8px' }}>
              {eventData.name}
            </h2>
            <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '4px' }}>
              📅 {eventData.date} • {eventData.time}
            </div>
            <div style={{ fontSize: '13px', color: '#6B7280' }}>
              📍 {eventData.venue}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        {step === 1 && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
              Choose Your Tickets
            </h3>

            {eventData.ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #E5E7EB',
                  marginBottom: '12px',
                }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px' }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937' }}>
                      {ticket.name}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#10B981' }}>
                      ₹{ticket.price.toLocaleString()}
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 8px 0' }}>
                    {ticket.description}
                  </p>
                  <div style={{ fontSize: '12px', color: '#9CA3AF' }}>
                    {ticket.available} tickets available
                  </div>
                </div>

                {/* Quantity Selector */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '14px', color: '#6B7280', flex: 1 }}>Quantity</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      onClick={() => handleTicketChange(ticket.id, Math.max(0, (selectedTickets[ticket.id] || 0) - 1))}
                      disabled={(selectedTickets[ticket.id] || 0) === 0}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: (selectedTickets[ticket.id] || 0) === 0 ? '#F3F4F6' : '#FFFFFF',
                        border: '1px solid #D1D5DB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: (selectedTickets[ticket.id] || 0) === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '18px',
                        color: '#6B7280',
                      }}
                    >
                      −
                    </button>
                    <div style={{
                      width: '40px',
                      textAlign: 'center',
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#1F2937',
                    }}>
                      {selectedTickets[ticket.id] || 0}
                    </div>
                    <button
                      onClick={() => handleTicketChange(ticket.id, Math.min(ticket.available, (selectedTickets[ticket.id] || 0) + 1))}
                      disabled={(selectedTickets[ticket.id] || 0) >= ticket.available}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        backgroundColor: (selectedTickets[ticket.id] || 0) >= ticket.available ? '#F3F4F6' : '#10B981',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: (selectedTickets[ticket.id] || 0) >= ticket.available ? 'not-allowed' : 'pointer',
                        fontSize: '18px',
                        color: '#FFFFFF',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
              Attendee Details
            </h3>

            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              {/* Name */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  value={attendeeInfo.name}
                  onChange={(e) => setAttendeeInfo({ ...attendeeInfo, name: e.target.value })}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  value={attendeeInfo.email}
                  onChange={(e) => setAttendeeInfo({ ...attendeeInfo, email: e.target.value })}
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    fontSize: '15px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    outline: 'none',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#10B981'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
                <div style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>
                  Tickets will be sent to this email
                </div>
              </div>

              {/* Phone */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '8px',
                }}>
                  Phone Number *
                </label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{
                    padding: '12px 16px',
                    backgroundColor: '#F9FAFB',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '15px',
                    color: '#6B7280',
                  }}>
                    +91
                  </div>
                  <input
                    type="tel"
                    value={attendeeInfo.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                      setAttendeeInfo({ ...attendeeInfo, phone: value });
                    }}
                    placeholder="9876543210"
                    style={{
                      flex: 1,
                      padding: '12px 16px',
                      fontSize: '15px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      outline: 'none',
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#10B981'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', marginBottom: '16px' }}>
              Booking Summary
            </h3>

            {/* Tickets Summary */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '16px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#6B7280', marginBottom: '12px' }}>
                Selected Tickets
              </div>
              {Object.entries(selectedTickets).map(([ticketId, quantity]) => {
                if (quantity === 0) return null;
                const ticket = eventData.ticketTypes.find(t => t.id === ticketId);
                return (
                  <div key={ticketId} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: '1px solid #F3F4F6',
                  }}>
                    <div>
                      <div style={{ fontSize: '14px', color: '#1F2937' }}>
                        {ticket.name} × {quantity}
                      </div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                      ₹{(ticket.price * quantity).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Apply Coins */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              marginBottom: '16px',
            }}>
              <div
                onClick={() => setApplyCoins(!applyCoins)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '4px',
                  border: `2px solid ${applyCoins ? '#10B981' : '#D1D5DB'}`,
                  backgroundColor: applyCoins ? '#10B981' : '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {applyCoins && <span style={{ color: '#FFFFFF', fontSize: '12px' }}>✓</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937' }}>
                    Use ReZ Coins
                  </div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>
                    Available: {userCoins} coins (₹{userCoins})
                  </div>
                </div>
              </div>

              {applyCoins && (
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #E5E7EB' }}>
                  <input
                    type="range"
                    min="0"
                    max={Math.min(userCoins, getTotalAmount())}
                    value={coinsToUse}
                    onChange={(e) => setCoinsToUse(parseInt(e.target.value))}
                    style={{ width: '100%', marginBottom: '8px' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#6B7280' }}>
                    <span>Using {coinsToUse} coins</span>
                    <span>Save ₹{coinsToUse}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '20px',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#6B7280' }}>Subtotal</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>₹{getTotalAmount().toLocaleString()}</span>
              </div>
              {applyCoins && coinsToUse > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '14px', color: '#10B981' }}>Coins Applied</span>
                  <span style={{ fontSize: '14px', color: '#10B981' }}>-₹{coinsToUse}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '14px', color: '#6B7280' }}>Platform Fee</span>
                <span style={{ fontSize: '14px', color: '#1F2937' }}>₹50</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingTop: '12px',
                borderTop: '1px solid #E5E7EB',
              }}>
                <span style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937' }}>Total</span>
                <span style={{ fontSize: '18px', fontWeight: '700', color: '#10B981' }}>
                  ₹{(getTotalAmount() - (applyCoins ? coinsToUse : 0) + 50).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E5E7EB',
        padding: '16px 20px',
        zIndex: 10,
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '12px', alignItems: 'center' }}>
          {step < 3 && (
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>
                {getTotalTickets()} ticket{getTotalTickets() !== 1 ? 's' : ''} selected
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#1F2937' }}>
                ₹{getTotalAmount().toLocaleString()}
              </div>
            </div>
          )}
          <button
            onClick={handleContinue}
            style={{
              flex: step === 3 ? 1 : 'none',
              padding: '14px 32px',
              backgroundColor: '#10B981',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              color: '#FFFFFF',
              cursor: 'pointer',
            }}
          >
            {step === 3 ? 'Proceed to Payment' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventTicketing;
