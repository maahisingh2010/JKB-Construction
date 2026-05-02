import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import JKBLogo from './JKBLogo';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Jointventures', path: '/jointventures' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-slate-50 pt-12 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: Identity & Call - LOGO BACK HERE */}
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-12 opacity-90 hover:opacity-100 transition-opacity block cursor-pointer">
              <JKBLogo className="scale-100 origin-left" />
            </Link>

            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-8 border-b-2 border-brand-primary pb-2 inline-block">Call us today</h4>
            <div className="space-y-6">
              <div>
                <p className="text-lg md:text-xl font-extrabold text-brand-primary opacity-90 uppercase tracking-tight">
                  Mr. Pradeep Barman
                </p>
                <a 
                  href="tel:+919875001813" 
                  className="text-xl md:text-2xl font-extrabold text-slate-700 hover:text-brand-primary transition-all tracking-tighter opacity-90 block mt-1"
                >
                  Ph. -+91-9875001813
                </a>
              </div>

              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-5">Follow Us</h4>
                <div className="flex space-x-6">
                  {/* Facebook */}
                  <a href="#" className="text-slate-400 hover:text-brand-primary transition-all hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="text-slate-400 hover:text-brand-primary transition-all hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  {/* Twitter (X) */}
                  <a href="#" className="text-slate-400 hover:text-brand-primary transition-all hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="text-slate-400 hover:text-brand-primary transition-all hover:-translate-y-1">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-10 border-b-2 border-brand-primary pb-2 inline-block">Quick Links</h4>
            <div className="flex flex-col items-start space-y-4">
              {quickLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`text-xs font-bold transition-all duration-300 ease-in-out hover:translate-x-2 uppercase tracking-widest flex items-center group py-1 ${
                      isActive ? 'text-brand-primary' : 'text-slate-500 hover:text-brand-primary'
                    }`}
                  >
                    <span className={`mr-3 text-sm transition-all duration-300 ease-in-out group-hover:translate-x-1 ${
                      isActive ? 'text-brand-primary' : 'text-brand-primary'
                    }`}>»</span>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-10 border-b-2 border-brand-primary pb-2 inline-block">Contact Us</h4>
            
            <div className="space-y-8 flex flex-col items-start">
              {/* Address */}
              <div className="flex items-start max-w-[280px]">
                <div className="text-brand-primary mr-4 mt-1 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Address</h5>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=733-+7th+Floor,+Mall+of+Jaipur,+Gandhi+Path,+Vaishali+Nagar+Jaipur" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-700 leading-relaxed hover:text-brand-primary transition-colors cursor-pointer block"
                  >
                    733- 7th Floor, Mall of Jaipur, Gandhi Path, Vaishali Nagar Jaipur
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="text-brand-primary mr-4 mt-1 flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</h5>
                  <a 
                    href="mailto:jkbjaipur@gmail.com" 
                    className="text-sm font-bold text-slate-700 hover:text-brand-primary transition-colors break-all"
                  >
                    jkbjaipur@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 w-full mt-12 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            © {new Date().getFullYear()} JKB Constructions. All Rights Reserved.
          </p>
          <a href="https://uddanpromotions.com" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">
            Designed by Uddan Promotions pvt.ltd.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
