import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import JKBLogo from './JKBLogo';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Projects', 
      path: '/projects',
      subLinks: [
        { name: 'Ongoing Projects', path: '/projects?filter=ongoing' },
        { name: 'Complete Projects', path: '/projects?filter=completed' }
      ]
    },
    { name: 'Jointventures', path: '/jointventures' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left Side: JKB Logo */}
        <Link to="/" className="flex items-center">
          <div className="transform scale-[0.70] md:scale-[0.80] origin-left py-1">
            <JKBLogo />
          </div>
        </Link>

        {/* Right Side: Navigation Links */}
        <div className="hidden xl:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link
                to={link.path}
                className={`relative text-[14px] font-black uppercase tracking-widest transition-colors duration-300 block py-1 ${location.pathname === link.path ? 'text-brand-primary' : 'text-slate-700 group-hover:text-brand-primary'}`}
              >
                {link.name}
                <span 
                  className={`absolute left-0 bottom-0 h-[2px] bg-brand-primary transition-all duration-500 ease-out ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}
                ></span>
              </Link>

              {/* Dropdown Menu */}
              {link.subLinks && (
                <div className="absolute top-1/2 left-0 pt-8 w-52 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white/95 backdrop-blur-md shadow-lg rounded-md py-1 border border-slate-200/60 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 overflow-hidden">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block px-4 py-3 text-[11px] font-black uppercase tracking-widest transition-colors border-b last:border-0 border-slate-100 ${location.pathname + location.search === sub.path ? 'bg-slate-50 text-brand-primary' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-primary'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 z-50 relative"
        >
          <div className={`w-6 h-0.5 bg-slate-900 mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-slate-900 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
    </nav>

    {/* Mobile Menu Drawer Overlay */}
    <div 
      className={`fixed inset-0 bg-slate-900/40 z-30 transition-opacity duration-500 xl:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-full md:w-[350px] bg-white z-40 transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:hidden shadow-2xl`}>
        <div className="flex flex-col h-full pt-32 px-10 space-y-6 overflow-y-auto pb-10">
          {navLinks.map((link) => (
            <div key={link.name} className="w-full">
              {link.subLinks ? (
                <div className="w-full">
                  <button 
                    onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                    className={`w-full flex items-center justify-between text-[15px] font-semibold uppercase tracking-widest ${location.pathname === link.path ? 'text-brand-primary' : 'text-slate-900'}`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown 
                      size={22} 
                      className={`transition-transform duration-300 text-slate-600 ${mobileProjectsOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <div className={`ml-4 space-y-4 overflow-hidden transition-all duration-300 ${mobileProjectsOpen ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-[13px] font-medium uppercase tracking-widest block py-1 ${location.pathname + location.search === sub.path ? 'text-brand-primary font-bold' : 'text-slate-500 hover:text-brand-primary'}`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[15px] font-semibold uppercase tracking-widest block w-full text-left ${location.pathname === link.path ? 'text-brand-primary' : 'text-slate-900'}`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
