const Card = ({ children, className = '', onClick, hover = false }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-[#2C2C2E] border border-rez-gray-200 dark:border-transparent shadow-sm dark:shadow-none rounded-2xl overflow-hidden
        ${hover ? 'active:bg-[#3A3A3C] transition-colors cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
