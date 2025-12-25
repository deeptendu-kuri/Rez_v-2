/**
 * Privé Footer Navigation (Bottom Bar)
 * Exact copy from rezprive MainTabNavigator.tsx
 *
 * 5 Tabs Maximum (Intentional):
 * 1. Home - Entry point, overview, invitations
 * 2. Privileges - All unlocked benefits (where luxury is consumed)
 * 3. Explore - Center tab, highlighted (discovery hub - power button feel)
 * 4. Influence - Content performance (where power is measured)
 * 5. Profile - Status, recognition, settings (identity)
 *
 * Rules:
 * - Icons only (no labels by default)
 * - Gold for active, muted gray for inactive
 * - Deep charcoal/black background
 * - Explore centered and slightly larger
 */

import { NavLink } from 'react-router-dom';
import { priveColors } from '../../styles/prive-theme';

// Tab configuration following the rezprive spec - using clear, modern icons
const TAB_CONFIG = {
  Home: {
    icon: '⌂',
    iconActive: '⌂',
    path: '/prive',
    label: 'Home'
  },
  Privileges: {
    icon: '✧',
    iconActive: '✦',
    path: '/prive/privileges',
    label: 'Privileges'
  },
  Explore: {
    icon: '◎',
    iconActive: '◉',
    path: '/prive/explore',
    label: 'Explore',
    isCenter: true
  },
  Influence: {
    icon: '❋',
    iconActive: '✹',
    path: '/prive/influence',
    label: 'Influence'
  },
  Profile: {
    icon: '○',
    iconActive: '●',
    path: '/profile',
    label: 'Profile'
  },
};

const TabIcon = ({ focused, tabName, isCenter }) => {
  const config = TAB_CONFIG[tabName];
  const icon = focused ? config.iconActive : config.icon;

  if (isCenter) {
    // Explore tab - larger, highlighted, "discovery hub" feel
    return (
      <div
        className={`flex items-center justify-center w-14 h-14 rounded-full border-[1.5px] -mt-5
          ${focused
            ? 'border-[#C9A962] shadow-[0_4px_12px_rgba(201,169,98,0.4)]'
            : 'border-[rgba(201,169,98,0.3)]'
          }`}
        style={{
          backgroundColor: focused
            ? priveColors.transparent.gold10
            : priveColors.background.card,
          boxShadow: focused
            ? `0 4px 12px ${priveColors.gold.glow}`
            : `0 4px 12px ${priveColors.gold.glow}`,
        }}
      >
        <span
          className="text-[26px] leading-[30px]"
          style={{
            color: focused ? priveColors.gold.primary : priveColors.text.secondary
          }}
        >
          {icon}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-12 h-12">
      <span
        className="text-2xl leading-7"
        style={{
          color: focused ? priveColors.gold.primary : priveColors.text.tertiary
        }}
      >
        {icon}
      </span>
    </div>
  );
};

const BottomNavPriveExact = () => {
  const tabs = Object.entries(TAB_CONFIG);

  return (
    <nav
      className="fixed bottom-4 left-4 right-4 z-[100] h-16 rounded-3xl border"
      style={{
        backgroundColor: priveColors.background.secondary,
        borderColor: priveColors.border.primary,
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="flex items-center justify-around h-full px-2">
        {tabs.map(([name, config]) => (
          <NavLink
            key={name}
            to={config.path}
            className="flex flex-col items-center justify-center transition-all"
          >
            {({ isActive }) => (
              <TabIcon
                focused={isActive}
                tabName={name}
                isCenter={config.isCenter}
              />
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavPriveExact;
