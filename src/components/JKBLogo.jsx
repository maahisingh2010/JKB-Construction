import React from 'react';

const JKBLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png?v=3" 
        alt="JKB Constructions" 
        className="w-full h-auto object-contain"
        style={{ clipPath: 'inset(2.5%)' }}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/400x150/orange/white?text=Add+logo.png+to+public+folder";
        }}
      />
    </div>
  );
};

export default JKBLogo;
