/**
 * Mode Switcher Component
 * Allows users to toggle between Normal ReZ and Privé modes
 */

import { useNavigate, useLocation } from 'react-router-dom';

const ModeSwitcher = ({ currentMode = 'normal' }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPriveMode = location.pathname.startsWith('/prive');

  const switchToNormal = () => {
    navigate('/');
  };

  const switchToPrive = () => {
    navigate('/prive');
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      backgroundColor: '#1A1A1A',
      borderRadius: '24px',
      padding: '4px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      border: '1px solid #2A2A2A',
    }}>
      <button
        onClick={switchToNormal}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: !isPriveMode ? '#10B981' : 'transparent',
          color: !isPriveMode ? '#FFFFFF' : '#9CA3AF',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        ReZ
      </button>
      <button
        onClick={switchToPrive}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: isPriveMode ? '#C9A962' : 'transparent',
          color: isPriveMode ? '#0A0A0A' : '#9CA3AF',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s',
        }}
      >
        Privé
      </button>
    </div>
  );
};

export default ModeSwitcher;
