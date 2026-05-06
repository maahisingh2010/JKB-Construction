import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Phone, Mail, ArrowRight, ShieldCheck, Handshake, TrendingUp, ChevronDown, MapPin, Calculator, Send } from 'lucide-react';
import MangalmImage from '../assets/mangalm2.jpg';

const EnquiryJV = () => {
  // Profit Estimator State
  const [landArea, setLandArea] = useState(5000);
  const expectedRevenue = landArea * 12000; // 12k per sqft assumed selling
  const ownerShare = expectedRevenue * 0.40; // 40% owner
  const builderShare = expectedRevenue * 0.60; // 60% builder

  // Scroll to hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  // Floating Label Input Component
  const FloatingInput = ({ label, type = "text", as = "input", options = [] }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
      <div className="mb-6">
        <label className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-1">
          {label}
        </label>
        {as === "select" ? (
          <div className="relative">
            <select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-white/10 border-b-2 border-slate-300 px-0 py-2 text-slate-800 focus:border-brand-primary focus:outline-none transition-colors appearance-none bg-transparent relative z-10"
            >
              <option value="" disabled hidden></option>
              {options.map((opt, i) => <option key={i} value={opt} className="text-slate-900">{opt}</option>)}
            </select>
            <ChevronDown className="absolute right-0 top-3 text-slate-400 z-0" size={18} />
          </div>
        ) : as === "textarea" ? (
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            rows={3}
            className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-800 focus:border-brand-primary focus:outline-none transition-colors resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full bg-transparent border-b-2 border-slate-300 px-0 py-2 text-slate-800 focus:border-brand-primary focus:outline-none transition-colors"
          />
        )}
      </div>
    );
  };

  const location = useLocation();
  const navigate = useNavigate();
  const isEnquiry = location.pathname === '/enquiry';
  const isJV = location.pathname === '/jointventures';

  const goToEnquiry = () => {
    if (!isEnquiry) navigate('/enquiry');
    setTimeout(() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const goToJV = () => {
    if (!isJV) navigate('/jointventures');
    setTimeout(() => document.getElementById('jointventures')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="bg-[#0A1128] min-h-screen font-outfit text-white overflow-hidden">
      
      {/* 1. HERO SECTION - Glassmorphism & Luxury Feel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src={MangalmImage} 
            alt="Cityscape" 
            className="w-full h-full object-cover scale-105"
            style={{ filter: 'blur(8px) brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/50 via-transparent to-[#0A1128]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container relative z-10 px-6 flex justify-center"
        >
          <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-16 text-center max-w-4xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transform hover:scale-[1.01] transition-transform duration-700">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-primary text-[10px] font-black uppercase tracking-widest mb-6">
                Connect With Us
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1] drop-shadow-2xl">
              Building Your Dreams <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Into Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Trusted Construction & Joint Venture Experts in Jaipur. We deliver luxury, structural mastery, and highly profitable partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button onClick={goToEnquiry} className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-orange-600 text-white rounded-full font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(242,101,34,0.4)] hover:shadow-[0_0_30px_rgba(242,101,34,0.6)] flex items-center justify-center gap-2">
                Enquire Now <ArrowRight size={18} />
              </button>
              <button onClick={goToJV} className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full font-black uppercase tracking-widest transition-all backdrop-blur-md flex items-center justify-center gap-2">
                Start Joint Venture
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. ENQUIRY SECTION - Modern Glass Card */}
      {isEnquiry && (
        <section id="enquiry" className="py-24 relative overflow-hidden bg-[#0A1128]">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative"
            >
              <div className="mb-10">
                <span className="text-brand-primary font-black tracking-widest uppercase text-xs mb-2 block">Quick Connect</span>
                <h3 className="text-4xl font-extrabold text-white tracking-tighter">General Enquiry</h3>
              </div>
              
              <form className="space-y-4">
                <div className="relative mb-6">
                  <input type="text" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors peer placeholder-transparent" placeholder="Full Name" id="fname" />
                  <label htmlFor="fname" className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand-primary">Full Name</label>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative mb-6">
                    <input type="tel" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors peer placeholder-transparent" placeholder="Phone" id="phone" />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand-primary">Phone Number</label>
                  </div>
                  <div className="relative mb-6">
                    <input type="email" className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors peer placeholder-transparent" placeholder="Email" id="email" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand-primary">Email Address</label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="relative mb-6">
                    <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors appearance-none relative z-10" defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="residential" className="text-black">Residential Construction</option>
                      <option value="commercial" className="text-black">Commercial Construction</option>
                      <option value="renovation" className="text-black">Renovation</option>
                      <option value="interior" className="text-black">Interior Design</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-4 text-white/50 z-0" size={16} />
                    <label className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold">Requirement</label>
                  </div>
                  <div className="relative mb-6">
                    <select className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors appearance-none relative z-10" defaultValue="">
                      <option value="" disabled hidden></option>
                      <option value="under50" className="text-black">Under 50 Lacs</option>
                      <option value="50to1" className="text-black">50 Lacs - 1 Cr</option>
                      <option value="1to5" className="text-black">1 Cr - 5 Cr</option>
                      <option value="above5" className="text-black">Above 5 Cr</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-4 text-white/50 z-0" size={16} />
                    <label className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold">Budget Range</label>
                  </div>
                </div>

                <div className="relative mb-8">
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:border-brand-primary focus:outline-none transition-colors peer placeholder-transparent resize-none" placeholder="Message" id="msg" />
                  <label htmlFor="msg" className="absolute left-0 -top-3.5 text-[10px] text-brand-primary uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-brand-primary">Your Message</label>
                </div>

                <button type="button" className="w-full bg-brand-primary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1128] transition-all duration-300 shadow-[0_0_20px_rgba(242,101,34,0.3)]">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                Let's Build <br/> <span className="text-brand-primary">The Future</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                Our experts are ready to turn your vision into a structural reality. Reach out today for a consultation or joint venture proposal.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Call Us 24/7</span>
                    <span className="text-2xl font-bold">+91 98750 01813</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Email Address</span>
                    <span className="text-xl font-bold">jkbjaipur@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      )}

      {/* 3. JOINT VENTURE SECTION (HIGHLIGHT) */}
      {isJV && (
        <section id="jointventures" className="py-24 bg-white text-slate-900 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
          
          {/* Custom JV Banner Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-slate-50"
          >
            <img 
              src="/jv_banner.jpg" 
              alt="Joint Venture Partnership" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000" 
            />
          </motion.div>

          <div className="text-center mb-16">
            <span className="text-[12px] font-black text-brand-primary uppercase tracking-[0.4em] block mb-4">Strategic Partnership</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              Unlock Greater Value <br/> Through the Right Partnership
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="text-brand-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">Higher ROI</h3>
                    <p className="text-slate-500 font-medium">Maximize your returns without upfront investment. We bring the capital, expertise, and execution.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Handshake className="text-brand-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">Transparent Partnership</h3>
                    <p className="text-slate-500 font-medium">Clear agreements, 100% legal compliance, and open-book financial sharing at every step.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-brand-primary" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2">End-to-end Project Handling</h3>
                    <p className="text-slate-500 font-medium">From municipal approvals to architectural design and final sales, we manage it all.</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2 mb-6">
                  <Calculator className="text-brand-primary" /> Live Profit Estimator
                </h3>
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-bold text-slate-500 mb-2">
                    <span>Land Area: {landArea.toLocaleString()} Sq.Ft</span>
                    <span>10k Sq.Ft+</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000" 
                    max="10000" 
                    step="500" 
                    value={landArea}
                    onChange={(e) => setLandArea(Number(e.target.value))}
                    className="w-full accent-brand-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Your Est. Value</span>
                    <span className="text-2xl font-black text-slate-900">₹{(ownerShare / 10000000).toFixed(2)} Cr</span>
                  </div>
                  <div className="bg-brand-primary p-4 rounded-2xl shadow-sm text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/80 block mb-1">Builder Share</span>
                    <span className="text-2xl font-black text-white">₹{(builderShare / 10000000).toFixed(2)} Cr</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-medium mt-4 text-center">*Values are estimates based on prime location averages.</p>
              </div>
            </div>

            <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative">
              <div className="mb-10">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Reach Out to Break Ground with Us</h3>
                <p className="text-slate-500">Fill details and our directors will contact you directly.</p>
              </div>
              <form className="space-y-2">
                <FloatingInput label="Land Owner Name" />
                <FloatingInput label="Location / Area" />
                <FloatingInput label="Land Size (Sq. Yards / Sq. Ft)" />
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput label="Property Type" as="select" options={["Residential Plot", "Commercial Land", "Old House", "Agricultural"]} />
                  <FloatingInput label="Investment Type" as="select" options={["Land Owner", "Financial Investor"]} />
                </div>
                <FloatingInput label="Expected Share / Requirement" />
                
                <button type="button" className="w-full mt-6 bg-[#0A1128] hover:bg-brand-primary text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group">
                  Submit Proposal <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      )}

    </div>
  );
};

export default EnquiryJV;
