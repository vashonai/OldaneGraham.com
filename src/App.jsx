import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, ArrowRight, Award, TrendingUp, Users, Globe, Cpu, BookOpen, Zap } from 'lucide-react';

// --- Shared Components ---

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-blue-600 font-bold uppercase tracking-widest text-sm"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-3xl md:text-4xl font-display font-bold text-navy mt-2"
    >
      {children}
    </motion.h2>
  </div>
);

// --- Sections ---

const Navbar = () => (
  <nav className="max-w-[1200px] mx-auto px-6 py-8 flex justify-between items-center bg-transparent relative z-50">
    <div className="text-2xl font-display font-extrabold tracking-tighter text-navy">
      OG<span className="text-blue-600">.</span>
    </div>
    <div className="hidden md:flex space-x-8 font-medium text-xs uppercase tracking-widest text-slate-500">
      {['About', 'Impact', 'Expertise', 'Connect'].map((item) => (
        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 transition-colors">
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-24 md:pt-20 flex flex-col md:flex-row items-center gap-16 relative">
    {/* Abstract Background Shape */}
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />
    
    <div className="w-full md:w-3/5 order-2 md:order-1">
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-display font-extrabold text-navy leading-[1.1]"
      >
        Oldane <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Graham</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl font-light text-slate-600 mt-6 max-w-lg leading-relaxed"
      >
        Digital Transformation & Agile Leader driving <span className="font-semibold text-navy underline decoration-blue-500/30 decoration-4">AI-enabled delivery</span> across Enterprise, Telecom & Financial sectors.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex flex-wrap gap-3 mt-6"
      >
        {['PMP', 'ACP', 'PSM-I', 'Author'].map((badge) => (
          <span key={badge} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full tracking-wide">
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 mt-10"
      >
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-105 transition-transform">
          Download CV <Download size={18} />
        </button>
        <button className="border-2 border-slate-200 text-navy px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
          Contact Me
        </button>
      </motion.div>
    </div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full md:w-2/5 order-1 md:order-2 relative"
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 rounded-[2rem] rotate-3 animate-pulse" />
      <div className="relative z-10 rounded-tr-[100px] rounded-bl-[40px] rounded-tl-xl rounded-br-xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/5]">
        <img 
          src="/oldane-graham.jpg" 
          alt="Oldane Graham" 
          className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-1 hidden md:flex flex-col items-center">
        <div className="h-40 w-px bg-slate-200 relative">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-600" />
        </div>
      </div>
      
      <div className="md:col-span-7">
        <SectionTitle subtitle="About Me">Strategy Meets Intelligent Execution</SectionTitle>
        <p className="text-xl font-medium leading-relaxed text-navy mb-6">
          Digital Transformation Strategist and founder of AgileLab Limited, helping organizations reimagine how they work through automation, AI, and intelligent process design.
        </p>
        <p className="text-slate-600 leading-loose">
          With over a decade of experience managing complex technology projects across telecom, banking, and fintech sectors, I combine strategic vision with hands-on execution to deliver scalable digital solutions. I'm also the creator of <span className="font-semibold text-navy">Optify</span>, an AI optimization platform that empowers businesses to streamline workflows and boost productivity.
        </p>
      </div>

      <div className="md:col-span-4 relative">
        <div className="p-8 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl">
          <span className="block text-5xl font-display font-bold text-navy">10+</span>
          <span className="text-slate-500 font-medium uppercase tracking-tighter">Years Driving Digital Transformation</span>
        </div>
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const items = [
    { icon: <Cpu />, title: "Optify Platform", desc: "Created an AI optimization platform that empowers businesses to streamline workflows and boost productivity at scale." },
    { icon: <Globe />, title: "AgileLab Limited", desc: "Founded AgileLab Limited to help organizations reimagine how they work through automation, AI, and intelligent process design." },
    { icon: <TrendingUp />, title: "Enterprise Delivery", desc: "Drove AI-enabled delivery across telecom, banking, and fintech sectors, transforming complex technology projects into scalable solutions." }
  ];

  return (
    <section id="impact" className="py-24 max-w-[1200px] mx-auto px-6">
      <SectionTitle subtitle="Impact">Key Achievements</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="group p-8 bg-white rounded-xl shadow-sm border-t-4 border-slate-100 hover:border-blue-600 transition-all duration-300 shadow-slate-200/50"
          >
            <div className="text-blue-600 mb-6 transition-transform group-hover:scale-110 duration-300">
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <h3 className="text-xl font-display font-bold mb-3 text-navy">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    "Digital Transformation", "Agile Leadership", "AI & Automation", 
    "Project Management (PMP)", "Scrum (PSM-I)", "Enterprise Strategy", 
    "Telecom Solutions", "Fintech & Banking", "Process Optimization",
    "Stakeholder Management", "Product Development"
  ];
  
  return (
    <section id="expertise" className="py-20 bg-navy rounded-[2.5rem] mx-4 md:mx-6 px-6 relative overflow-hidden text-white">
      <div className="max-w-[1100px] mx-auto relative z-10">
        <h2 className="text-3xl font-display font-bold mb-12 text-center md:text-left">Core Expertise</h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {skills.map((skill) => (
            <motion.span 
              key={skill}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
    </section>
  );
};

const Contact = () => (
  <section id="connect" className="py-32 max-w-[800px] mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy">
      Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
    </h2>
    <p className="text-slate-600 mb-12 text-lg leading-relaxed">
      Open to strategic consulting, speaking engagements, and high-impact digital transformation partnerships.
    </p>
    
    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <a href="mailto:hello@oldanegraham.com" className="flex items-center gap-4 text-navy font-semibold group">
        <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
          <Mail size={24} />
        </div>
        hello@oldanegraham.com
      </a>
      <a href="#" className="flex items-center gap-4 text-navy font-semibold group">
        <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
          <Linkedin size={24} />
        </div>
        LinkedIn
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="max-w-[1200px] mx-auto px-6 py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm">
    <p>&copy; {new Date().getFullYear()} Oldane Graham. All rights reserved.</p>
    <div className="flex gap-8">
      <a href="#" className="hover:text-navy transition-colors">AgileLab</a>
      <a href="#" className="hover:text-navy transition-colors">Optify</a>
      <a href="#" className="hover:text-navy transition-colors">LinkedIn</a>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-offwhite min-h-screen font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
