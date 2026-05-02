import React from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown } from 'lucide-react';
import Section, { SectionHeader } from '../components/Section';

import ContactImg from '../assets/const22.jpg';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    },
    validate: values => {
      const errors = {};
      if (!values.fullName) {
        errors.fullName = 'Required';
      }
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.subject) {
        errors.subject = 'Required';
      }
      if (!values.message) {
        errors.message = 'Required';
      }
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-24 pb-20 font-outfit">
      {/* Contact Hero - LIGHT */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="container relative z-10 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-brand-primary font-black tracking-[0.4em] uppercase text-sm mb-6 block">Get In Touch</span>
              <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none mb-10 text-slate-800/90">
                Start Your <br /> <span className="text-brand-primary">Project.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 border-l-4 border-t-4 border-brand-primary/20" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-4 border-b-4 border-brand-primary/20" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
                <img 
                  src={ContactImg} 
                  alt="Contact Us" 
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section className="py-20 md:py-40 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Let's Build Together" subtitle="Contact Info" />
            <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
              Have a visionary project in mind? Our team of experts is ready to discuss how we can turn your blueprints into reality.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mr-6 text-brand-primary transition-all duration-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-400 font-black uppercase tracking-widest text-xs mb-1">Email Us</h4>
                  <p className="text-xl font-bold text-slate-900 break-all">contact@jkbconstruction.com</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mr-6 text-brand-primary transition-all duration-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-400 font-black uppercase tracking-widest text-xs mb-1">Call Us</h4>
                  <p className="text-xl font-bold text-slate-900">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mr-6 text-brand-primary transition-all duration-500">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-slate-400 font-black uppercase tracking-widest text-xs mb-1">Visit Us</h4>
                  <p className="text-xl font-bold text-slate-900">123 Construction Plaza, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 md:p-12 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow relative"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input 
                    name="fullName"
                    type="text" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    className="w-full bg-white border border-slate-200 rounded-sm p-4 focus:outline-none focus:border-brand-primary transition-colors text-slate-900" 
                    placeholder="John Doe" 
                  />
                  {formik.touched.fullName && formik.errors.fullName ? <div className="text-red-500 text-xs font-bold">{formik.errors.fullName}</div> : null}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="w-full bg-white border border-slate-200 rounded-sm p-4 focus:outline-none focus:border-brand-primary transition-colors text-slate-900" 
                    placeholder="john@example.com" 
                  />
                  {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-xs font-bold">{formik.errors.email}</div> : null}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Subject</label>
                <div className="relative">
                  <select 
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className="w-full bg-white border border-slate-200 rounded-sm p-4 focus:outline-none focus:border-brand-primary transition-colors text-slate-900 appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Project Enquiry</option>
                    <option value="residential">Residential Construction</option>
                    <option value="commercial">Commercial Construction</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="other">Other Enquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={18} />
                  </div>
                </div>
                {formik.touched.subject && formik.errors.subject ? <div className="text-red-500 text-xs font-bold">{formik.errors.subject}</div> : null}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message</label>
                <textarea 
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  rows="5" 
                  className="w-full bg-white border border-slate-200 rounded-sm p-4 focus:outline-none focus:border-brand-primary transition-colors text-slate-900" 
                  placeholder="Tell us about your vision..."
                ></textarea>
                {formik.touched.message && formik.errors.message ? <div className="text-red-500 text-xs font-bold">{formik.errors.message}</div> : null}
              </div>

              <button type="submit" className="w-full bg-brand-primary text-white py-5 font-black uppercase tracking-widest flex items-center justify-center group hover:bg-brand-secondary transition-all rounded-sm shadow-lg">
                Send Message <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
