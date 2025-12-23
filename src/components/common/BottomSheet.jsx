import { useEffect } from 'react';
import { X } from 'lucide-react';

const BottomSheet = ({ isOpen, onClose, title, children, height = 'auto' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white dark:bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-rez-gray-100 dark:bg-[#1C1C1E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-t-3xl transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ maxHeight: height === 'auto' ? '90vh' : height }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-gray-600 rounded-full" />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 pb-4">
            <h2 className="text-xl font-semibold text-rez-navy dark:text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-rez-gray-100 dark:bg-white/10 active:bg-white/20"
            >
              <X className="w-5 h-5 text-rez-navy dark:text-white" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="px-5 pb-8 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BottomSheet;
