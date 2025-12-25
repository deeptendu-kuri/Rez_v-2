import { useApp } from '../../contexts/AppContext';
import BottomNavNearYou from './BottomNavNearYou';
import BottomNavMall from './BottomNavMall';
import BottomNavCashStore from './BottomNavCashStore';
import BottomNavPriveExact from './BottomNavPriveExact';

/**
 * BottomNavManager - Renders the appropriate bottom navigation based on current mode
 *
 * Each mode has its own navigation structure:
 * - nearYou: Home, Explore, Pay, Offers, Wallet (local/offline focus)
 * - mall: Home, Brands, Categories, Cart, Wallet (curated shopping)
 * - cashStore: Home, Stores, Coupons, Track, Wallet (affiliate cashback)
 * - prive: Home, Privileges, Explore, Influence, Profile (exclusive/luxury)
 */
const BottomNavManager = () => {
  const { globalMode } = useApp();

  switch (globalMode) {
    case 'nearYou':
      return <BottomNavNearYou />;
    case 'mall':
      return <BottomNavMall />;
    case 'cashStore':
      return <BottomNavCashStore />;
    case 'prive':
      return <BottomNavPriveExact />;
    default:
      return <BottomNavNearYou />;
  }
};

export default BottomNavManager;
