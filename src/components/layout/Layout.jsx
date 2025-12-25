import { Outlet } from 'react-router-dom';
import ModeSwitcher from '../modes/ModeSwitcher';
import FilterSheet from '../modes/FilterSheet';
import IntentPicker from '../modes/IntentPicker';
import VibePicker from '../modes/VibePicker';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col transition-colors">
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Modals / Sheets */}
      <ModeSwitcher />
      <FilterSheet />
      <IntentPicker />
      <VibePicker />
    </div>
  );
};

export default Layout;
