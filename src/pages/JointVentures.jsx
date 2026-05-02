import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormik } from 'formik';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { 
  ArrowRight, 
  MapPin, 
  Calculator, 
  Building2, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Map,
  ChevronDown
} from 'lucide-react';

import JV1 from '../assets/const8.jpg';
import JV2 from '../assets/const9.jpg';
import JV3 from '../assets/const10.jpg';
import ProcessImage from '../assets/const11.jpg';

const JointVentures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [JV1, JV3, JV2];

  // --- Calculator State ---
  const [landValue, setLandValue] = useState(50000000); // 5Cr
  const [constCost, setConstCost] = useState(30000000); // 3Cr
  const [jvRatio, setJvRatio] = useState(50); // Landowner %

  const landownerShare = ((landValue + constCost) * (jvRatio / 100));
  const builderShare = ((landValue + constCost) * ((100 - jvRatio) / 100));

  const pieData = [
    { name: 'Landowner Share', value: landownerShare, color: '#f97316' }, // brand-primary
    { name: 'Builder Share', value: builderShare, color: '#0f172a' } // slate-900
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  // --- Smart Engine State ---
  const [engineResult, setEngineResult] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      location: '',
      landSize: '',
      roadWidth: ''
    },
    validate: values => {
      const errors = {};
      if (!values.location) errors.location = 'Required';
      if (!values.landSize) errors.landSize = 'Required';
      if (!values.roadWidth) errors.roadWidth = 'Required';
      return errors;
    },
    onSubmit: values => {
      const size = values.landSize;
      if (size > 500) setEngineResult("Premium Multi-Story Apartment Complex (High ROI)");
      else if (size > 200) setEngineResult("Luxury Villa / Duplex Setup (Fast Selling)");
      else setEngineResult("High-End Independent Floors (Quick Turnaround)");
    },
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="pt-24 min-h-screen bg-white font-outfit">
      
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img src={slides[currentSlide]} alt="JV Slide" className="w-full h-full object-cover opacity-80" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-[12px] font-black text-brand-primary uppercase tracking-[0.5em] block mb-4">Strategic Partnership</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] uppercase tracking-tighter mb-6">
              Turn Your Land Into A <br /> <span className="text-brand-primary">High-Value Asset</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
              Partner with JKB Constructions for a risk-free, transparent, and highly profitable Joint Venture. Zero upfront investment required.
            </p>
            <a href="#calculator" className="bg-brand-primary text-white px-8 py-4 rounded-md font-black uppercase tracking-widest flex items-center space-x-3 hover:bg-white hover:text-slate-900 transition-all inline-flex group shadow-2xl">
              <span>Calculate Profit</span>
              <Calculator size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Profit Calculator & Visualizer */}
      <section id="calculator" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Profit Split Visualizer</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Estimate your returns in real-time</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center bg-white p-6 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            {/* Left: Inputs */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Land Value</label>
                  <span className="text-brand-primary font-bold">{formatCurrency(landValue)}</span>
                </div>
                <input 
                  type="range" min="10000000" max="200000000" step="5000000" 
                  value={landValue} onChange={(e) => setLandValue(Number(e.target.value))}
                  className="w-full accent-brand-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">Estimated Construction Cost</label>
                  <span className="text-brand-primary font-bold">{formatCurrency(constCost)}</span>
                </div>
                <input 
                  type="range" min="10000000" max="150000000" step="5000000" 
                  value={constCost} onChange={(e) => setConstCost(Number(e.target.value))}
                  className="w-full accent-brand-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs font-black text-slate-900 uppercase tracking-widest">JV Ratio (Landowner %)</label>
                  <span className="text-brand-primary font-bold">{jvRatio}% / {100 - jvRatio}%</span>
                </div>
                <input 
                  type="range" min="30" max="70" step="5" 
                  value={jvRatio} onChange={(e) => setJvRatio(Number(e.target.value))}
                  className="w-full accent-brand-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="pt-6 border-t border-slate-100">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">What You Get Instantly:</h4>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-600 font-bold">Your Share Value:</span>
                  <span className="text-2xl font-black text-slate-900">{formatCurrency(landownerShare)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600 font-bold">Expected ROI:</span>
                  <span className="text-2xl font-black text-green-500">+ {((landownerShare - landValue) / landValue * 100).toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Right: Graph */}
            <div className="h-[300px] md:h-[400px] w-full relative flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%" cy="50%"
                    innerRadius={80} outerRadius={140}
                    paddingAngle={5} dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip formatter={(value) => formatCurrency(value)} />
                  <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
                <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Total Value</span>
                <span className="text-xl font-black text-slate-900">{formatCurrency(landValue + constCost)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transparent Earnings Example */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 p-12 opacity-5">
               <TrendingUp size={200} className="text-white" />
             </div>
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div>
                  <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Real World Case Study</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">See Real Numbers. <br/> Feel Real Trust.</h2>
                  <p className="text-slate-400 leading-relaxed mb-8">This is an actual breakdown of a recent Joint Venture project completed in Vaishali Nagar, Jaipur. Numbers speak louder than promises.</p>
               </div>
               
               <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  <h3 className="text-white font-black uppercase tracking-widest mb-6 pb-4 border-b border-white/10">Project: 200 Sq Yard Plot</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Original Land Value</span>
                      <span className="font-bold text-white">₹ 2.50 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>Our Const. Investment</span>
                      <span className="font-bold text-white">₹ 1.80 Cr</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>JV Ratio (Owner/Builder)</span>
                      <span className="font-bold text-white">50% / 50%</span>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/10 flex justify-between items-center">
                      <span className="text-brand-primary font-black uppercase tracking-widest text-xs">Landowner Final Profit</span>
                      <span className="text-3xl font-black text-white">₹ 3.15 Cr</span>
                    </div>
                    <p className="text-green-400 text-xs font-bold text-right">+ ₹65 Lakhs Net Gain</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* 4. JV Process Timeline (Visual Infographic Style) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">The JV Journey</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">A transparent, step-by-step timeline to success</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", icon: <MapPin />, title: "Land Evaluation", desc: "Expert valuation & feasibility check" },
                { step: "02", icon: <FileText />, title: "Agreement", desc: "100% transparent legal documentation" },
                { step: "03", icon: <Building2 />, title: "Design", desc: "Modern architectural conceptualization" },
                { step: "04", icon: <CheckCircle2 />, title: "Construction", desc: "Premium materials & timely execution" },
                { step: "05", icon: <TrendingUp />, title: "Profit Split", desc: "Handover and smooth distribution" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center text-slate-400 shadow-xl mb-6 relative group-hover:border-brand-primary group-hover:text-brand-primary transition-colors duration-300">
                    {item.icon}
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-slate-900 text-white rounded-full text-[10px] font-black flex items-center justify-center">{item.step}</div>
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Smart JV Recommendation Engine */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-full mb-6">
            <Map size={32} />
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Find Your Perfect JV Model</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-12">Let our AI engine recommend the most profitable structure for your specific land.</p>
          
          <form onSubmit={formik.handleSubmit} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-left">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location Area</label>
              <div className="relative">
                <select 
                  name="location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-sm font-bold text-slate-700 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select Area...</option>
                  <option value="vaishali">Vaishali Nagar</option>
                  <option value="mansarovar">Mansarovar</option>
                  <option value="jagatpura">Jagatpura</option>
                  <option value="other">Other Area</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown size={18} />
                </div>
              </div>
              {formik.touched.location && formik.errors.location ? <div className="text-red-500 text-xs font-bold mt-1">{formik.errors.location}</div> : null}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Land Size (Sq. Yd.)</label>
              <input 
                name="landSize" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.landSize}
                type="number" 
                placeholder="e.g. 250" 
                className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-sm font-bold text-slate-700" 
              />
              {formik.touched.landSize && formik.errors.landSize ? <div className="text-red-500 text-xs font-bold mt-1">{formik.errors.landSize}</div> : null}
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Road Width (Ft.)</label>
              <input 
                name="roadWidth"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.roadWidth}
                type="number" 
                placeholder="e.g. 30" 
                className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all text-sm font-bold text-slate-700" 
              />
              {formik.touched.roadWidth && formik.errors.roadWidth ? <div className="text-red-500 text-xs font-bold mt-1">{formik.errors.roadWidth}</div> : null}
            </div>
            <button type="submit" className="w-full bg-slate-900 text-white p-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-primary transition-colors h-[54px] mb-[2px]">
              Analyze
            </button>
          </form>

          {engineResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-green-50 border border-green-100 rounded-2xl text-center"
            >
              <span className="text-xs font-black uppercase tracking-[0.3em] text-green-600 block mb-2">Recommended Model</span>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{engineResult}</h3>
            </motion.div>
          )}
        </div>
      </section>

      {/* 6. CTA Section (Most Important) */}
      <section className="py-16 md:py-24 bg-[#f47a4d] relative overflow-hidden">
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ShieldCheck size={48} className="mx-auto text-white mb-6" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
            Ready to Build <br /> Something Big?
          </h2>
          <p className="text-white/90 font-bold text-lg mb-10 max-w-2xl mx-auto">Don't let your land sit idle. Transform it into a premium asset with Jaipur's most trusted developer.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="/contact" className="bg-white text-brand-primary px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-colors w-full sm:w-auto shadow-2xl">
              Start JV Discussion
            </a>
            <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors w-full sm:w-auto">
              Download Proposal
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JointVentures;
