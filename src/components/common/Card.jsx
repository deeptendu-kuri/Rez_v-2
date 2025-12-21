const Card = ({ children, className = '', onClick, hover = false }) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-[#2C2C2E] rounded-2xl overflow-hidden
        ${hover ? 'active:bg-[#3A3A3C] transition-colors cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
