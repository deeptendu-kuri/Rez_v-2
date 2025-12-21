import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';
import ModeSwitcher from '../modes/ModeSwitcher';
import FilterSheet from '../modes/FilterSheet';
import IntentPicker from '../modes/IntentPicker';
import VibePicker from '../modes/VibePicker';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1 pb-24 overflow-y-auto">
        <Outlet />
      </main>

      <BottomNav />

      {/* Modals / Sheets */}
      <ModeSwitcher />
      <FilterSheet />
      <IntentPicker />
      <VibePicker />
    </div>
  );
};

export default Layout;
