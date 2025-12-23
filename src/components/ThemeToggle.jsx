import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-rez-md bg-rez-green-500/10 dark:bg-white/10 hover:bg-rez-green-500/20 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-rez-gold" />
      ) : (
        <Moon className="w-5 h-5 text-rez-green-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
