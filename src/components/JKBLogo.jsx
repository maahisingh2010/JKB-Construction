import React from 'react';

const JKBLogo = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-end gap-1">
        {/* Abstract Building Shape */}
        <div className="relative w-12 h-10 mb-1">
          <div className="absolute bottom-0 left-0 w-4 h-8 bg-brand-secondary transform skew-y-12 border-r border-white/20"></div>
          <div className="absolute bottom-0 left-4 w-4 h-10 bg-brand-secondary transform skew-y-6 border-r border-white/20"></div>
          <div className="absolute bottom-0 left-8 w-4 h-6 bg-brand-primary transform -skew-y-6"></div>
        </div>
        
        {/* JKB Text */}
        <div className="flex items-baseline">
          <span className="text-4xl font-black text-brand-primary tracking-tighter">J</span>
          <span className="text-4xl font-black text-slate-900 tracking-tighter">KB</span>
        </div>
      </div>
      
      {/* Constructions Subtext */}
      <div className="w-full flex justify-end -mt-2 pr-1">
        <span className="text-[8px] font-bold text-slate-900 uppercase tracking-widest">Constructions</span>
      </div>
      
      {/* Tagline */}
      <div className="mt-1 border-t border-brand-primary pt-1 px-2">
        <span className="text-[10px] font-medium text-brand-accent italic whitespace-nowrap">
          Plan Better... Build Better...
        </span>
      </div>
    </div>
  );
};

export default JKBLogo;
