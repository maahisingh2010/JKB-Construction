import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Users, Award, Briefcase } from 'lucide-react';
import Section, { SectionHeader } from '../components/Section';

const About = () => {
  const values = [
    { icon: <Shield className="h-10 w-10 text-brand-primary" />, title: 'Integrity', desc: 'We maintain the highest standards of ethics and professional behavior in all our interactions.' },
    { icon: <Award className="h-10 w-10 text-brand-primary" />, title: 'Excellence', desc: 'We strive for perfection in every detail, from the foundation to the finishing touches.' },
    { icon: <Users className="h-10 w-10 text-brand-primary" />, title: 'Collaboration', desc: 'We work closely with clients and partners to ensure collective success.' },
  ];

  const team = [
    { name: 'John Doe', role: 'Chief Executive Officer', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
    { name: 'Jane Smith', role: 'Head of Architecture', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400' },
    { name: 'Robert Brown', role: 'Project Director', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 pt-20">
      {/* Cinematic About Hero - LIGHT */}
      <section className="relative py-16 md:py-32 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[25vw] font-black leading-none uppercase text-slate-900">Legend</span>
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <span className="text-brand-primary font-black tracking-[0.3em] uppercase text-sm mb-6 block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.8] mb-12 text-slate-800/90">
              Engineering <br /> <span className="text-brand-primary">Modernity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-2xl">
              Since our inception, JKB Construction has been at the forefront of the global infrastructure revolution, delivering complex projects with surgical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Sections - LIGHT */}
      <Section bg="white" className="clip-slant-reverse py-20 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-brand-primary h-8 w-8" />
            </div>
            <h2 className="text-4xl font-black mb-6">Our Mission</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To build iconic infrastructures that empower communities and set new global benchmarks for safety, sustainability, and technological innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-12 rounded-3xl border border-slate-100"
          >
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-brand-primary h-8 w-8" />
            </div>
            <h2 className="text-4xl font-black mb-6">Our Vision</h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              To become the world's most trusted construction partner, known for solving the unsolvable and transforming the skyline of every major city.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Core Values */}
      <Section bg="slate-50" className="py-20 md:py-40">
        <SectionHeader title="The JKB DNA" subtitle="Core Values" centered />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-white border border-slate-100 rounded-2xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">{value.icon}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-brand-primary transition-colors">{value.title}</h3>
              <p className="text-slate-500">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section bg="white" className="rounded-t-[100px] overflow-hidden">
        <SectionHeader title="The Visionaries" subtitle="Leadership" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer shadow-xl"
            >
              <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/60 transition-all duration-500" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0">
                <h3 className="text-3xl font-black text-white">{member.name}</h3>
                <p className="text-brand-primary font-bold uppercase tracking-widest text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
