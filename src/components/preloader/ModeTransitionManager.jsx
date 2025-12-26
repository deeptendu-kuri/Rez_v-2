import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../../contexts/AppContext';
import ModePreloader from './ModePreloader';

const ModeTransitionManager = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { globalMode } = useApp();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionMode, setTransitionMode] = useState(null);
  const [previousMode, setPreviousMode] = useState(null);

  // Map globalMode to route paths
  const modeRoutes = {
    nearYou: '/',
    mall: '/mall',
    cashStore: '/cash-store',
    prive: '/prive',
  };

  // Map globalMode to preloader modes
  const preloaderModes = {
    nearYou: 'rez',
    mall: 'mall',
    cashStore: 'cash-store',
    prive: 'prive',
  };

  useEffect(() => {
    // Detect mode changes
    if (previousMode !== null && globalMode !== previousMode) {
      // Mode has changed - trigger transition
      const newPreloaderMode = preloaderModes[globalMode];
      setTransitionMode(newPreloaderMode);
      setIsTransitioning(true);
    }
    setPreviousMode(globalMode);
  }, [globalMode]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setTransitionMode(null);

    // Navigate to the appropriate route for the new mode
    const targetRoute = modeRoutes[globalMode];
    if (targetRoute && location.pathname !== targetRoute) {
      navigate(targetRoute);
    }
  };

  return (
    <>
      {isTransitioning && transitionMode && (
        <ModePreloader
          mode={transitionMode}
          onComplete={handleTransitionComplete}
        />
      )}
      {children}
    </>
  );
};

export default ModeTransitionManager;
