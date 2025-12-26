import { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import GlobalPreloader from './GlobalPreloader';
import ModePreloader from './ModePreloader';

const PreloaderManager = ({ children }) => {
  const { filters } = useApp();
  const [showGlobalPreloader, setShowGlobalPreloader] = useState(false);
  const [showModePreloader, setShowModePreloader] = useState(false);
  const [currentMode, setCurrentMode] = useState(null);

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('rez_has_visited');

    if (!hasVisited) {
      // First time visitor - show global preloader
      setShowGlobalPreloader(true);
      localStorage.setItem('rez_has_visited', 'true');
    } else {
      // Returning user - determine mode and show mode preloader
      const mode = determineCurrentMode();
      setCurrentMode(mode);
      setShowModePreloader(true);
    }
  }, []);

  // Determine current mode based on filters or URL
  const determineCurrentMode = () => {
    const path = window.location.pathname;

    // Check URL first
    if (path.startsWith('/mall')) return 'mall';
    if (path.startsWith('/cash-store')) return 'cash-store';
    if (path.startsWith('/prive')) return 'prive';

    // Check active filters
    if (filters?.mall) return 'mall';
    if (filters?.cashStore) return 'cash-store';
    if (filters?.prive) return 'prive';

    // Default to ReZ mode
    return 'rez';
  };

  const handleGlobalComplete = () => {
    setShowGlobalPreloader(false);
    // After global preloader, show mode preloader
    const mode = determineCurrentMode();
    setCurrentMode(mode);
    setShowModePreloader(true);
  };

  const handleModeComplete = () => {
    setShowModePreloader(false);
  };

  return (
    <>
      {showGlobalPreloader && (
        <GlobalPreloader onComplete={handleGlobalComplete} />
      )}

      {showModePreloader && currentMode && (
        <ModePreloader mode={currentMode} onComplete={handleModeComplete} />
      )}

      {/* Show children when preloaders are done */}
      {!showGlobalPreloader && !showModePreloader && children}
    </>
  );
};

export default PreloaderManager;
