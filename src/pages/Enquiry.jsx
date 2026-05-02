import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { ShieldCheck, HardHat, Home, Building2, PaintBucket, Landmark, Phone, Mail, MapPin, ChevronDown, Send, CheckCircle2 } from 'lucide-react';
import EnquiryHero from '../assets/const7.png';

const Enquiry = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      projectType: '',
      projectArea: '',
      budget: '',
      fileCategory: '',
      message: ''
    },
    validate: values => {
      const errors = {};
      if (!values.fullName) errors.fullName = 'Required';
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.projectType) errors.projectType = 'Required';
      if (!values.projectArea) errors.projectArea = 'Required';
      if (!values.message) errors.message = 'Required';
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[12px] font-black text-brand-primary uppercase tracking-[0.5em] block mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter"
          >
            Project Enquiry
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Info / Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={EnquiryHero} 
                  alt="Construction Requirement" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Call Us</span>
                    <p className="font-bold text-slate-900">+91 141 1234567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Email Us</span>
                    <p className="font-bold text-slate-900">info@jkbconstructions.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-8">Send us a Message</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</label>
                    <input 
                      name="fullName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.fullName && formik.errors.fullName ? <div className="text-red-500 text-xs font-bold">{formik.errors.fullName}</div> : null}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                    <input 
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs font-bold">{formik.errors.email}</div> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Type</label>
                    <div className="relative">
                      <select 
                        name="projectType"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.projectType}
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer text-slate-600"
                      >
                        <option value="" disabled>Select Type</option>
                        <option value="house">Individual House / Villa</option>
                        <option value="apartment">Apartment / Flat</option>
                        <option value="office">Office Space</option>
                        <option value="showroom">Showroom / Shop</option>
                        <option value="warehouse">Warehouse / Factory</option>
                        <option value="hotel">Hotel / Resort</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                    {formik.touched.projectType && formik.errors.projectType ? <div className="text-red-500 text-xs font-bold">{formik.errors.projectType}</div> : null}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Project Area (Sq. Ft.)</label>
                    <input 
                      name="projectArea"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.projectArea}
                      type="text" 
                      placeholder="e.g. 2500"
                      className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all"
                    />
                    {formik.touched.projectArea && formik.errors.projectArea ? <div className="text-red-500 text-xs font-bold">{formik.errors.projectArea}</div> : null}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estimated Budget</label>
                    <div className="relative">
                      <select 
                        name="budget"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.budget}
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer text-slate-600"
                      >
                        <option value="" disabled>Select Budget</option>
                        <option value="under20">Under ₹20 Lakhs</option>
                        <option value="20to50">₹20 Lakhs - ₹50 Lakhs</option>
                        <option value="50to1cr">₹50 Lakhs - ₹1 Crore</option>
                        <option value="1crto5cr">₹1 Crore - ₹5 Crores</option>
                        <option value="above5cr">Above ₹5 Crores</option>
                        <option value="not_decided">Not Decided Yet</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">File Category</label>
                    <div className="relative">
                      <select 
                        name="fileCategory"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fileCategory}
                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all appearance-none cursor-pointer text-slate-600"
                      >
                        <option value="" disabled>Select Format</option>
                        <option value="pdf">PDF Files</option>
                        <option value="image">Image Files (JPG/PNG)</option>
                        <option value="cad">CAD Files (DWG/DXF)</option>
                        <option value="excel">Excel Sheets (XLSX)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Upload Requirement File</label>
                  <input 
                    type="file" 
                    className="w-full bg-slate-50 border border-slate-200 p-[11px] rounded-xl focus:border-brand-primary outline-none transition-all text-xs file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-brand-primary file:text-white hover:file:bg-slate-900 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message / Query Box</label>
                  <textarea 
                    name="message"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    rows="4"
                    placeholder="Tell us more about your requirements..."
                    className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-brand-primary outline-none transition-all resize-none"
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? <div className="text-red-500 text-xs font-bold">{formik.errors.message}</div> : null}
                </div>

                <button type="submit" className="bg-brand-primary text-white w-full py-5 rounded-xl font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-3 hover:bg-slate-900 transition-all group shadow-xl shadow-brand-primary/20">
                  <span>Submit Detailed Enquiry</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
