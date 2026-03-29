import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Linkedin,
  ArrowRight,
  Award,
  TrendingUp,
  Users,
  Globe,
  Cpu,
  BookOpen,
  Zap,
  CheckCircle2,
} from "lucide-react";

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
      {["About", "Certification", "Tools", "Experience", "Book"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:text-blue-600 transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  </nav>
);

const Hero = () => (
  <section className="max-w-[1200px] mx-auto px-6 pt-8 pb-16 md:pt-12 flex flex-col md:flex-row items-center gap-8 relative">
    {/* Abstract Background Shape */}
    <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />

    <div className="w-full md:w-3/5 order-2 md:order-1">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-display font-extrabold text-navy leading-[1.1]"
      >
        Oldane{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Graham
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap gap-3 mt-6 mb-4"
      >
        {["PMP", "ACP", "PSM-I", "Author"].map((badge) => (
          <span
            key={badge}
            className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm md:text-base font-bold rounded-full tracking-wide"
          >
            {badge}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-xl md:text-2xl font-light text-slate-600 max-w-lg leading-relaxed space-y-4"
      >
        <span className="block">
          Digital Transformation Consultant and Author specializing in{" "}
          <span className="font-semibold text-navy underline decoration-blue-500/30 decoration-4">
            AI-enabled delivery
          </span>
          , Agile execution, and enterprise modernization.
        </span>
        <span className="block">
          Helping organizations bridge strategy to execution across Telecom, Financial Services, and global technology ecosystems.
        </span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col gap-4 mt-10 inline-flex items-start md:items-center xl:items-start"
      >
        <div className="flex flex-wrap gap-4 justify-start md:justify-center xl:justify-start">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 flex items-center gap-2 hover:scale-105 transition-transform">
            Download CV <Download size={18} />
          </button>
          <a
            href="https://linkedin.com/in/oldane-graham"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6666e6] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#5555d1] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#6666e6]/25 hover:scale-105"
          >
            LinkedIn <Linkedin size={18} />
          </a>
        </div>

        <div className="flex justify-center w-full">
          <a
            href="https://oldane-graham.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-slate-100 text-navy px-6 py-3 rounded-xl font-semibold hover:border-blue-600 hover:shadow-md transition-all flex items-center justify-center gap-2 group"
          >
            Medium{" "}
            <ArrowRight
              size={16}
              className="text-blue-600 transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full md:w-2/5 order-1 md:order-2 relative mt-16 md:mt-0 flex justify-center items-end"
    >
      <div className="relative w-full max-w-[340px] flex justify-center items-end pt-20">
        {/* Centered Blue Circle Background */}
        <div className="absolute bottom-0 w-[105%] aspect-square bg-blue-600 rounded-full shadow-2xl translate-y-2" />

        {/* Protruding Foreground Subject (Transparent PNG) */}
        {/* Without the grey background, the transparent image naturally creates the cutout effect. */}
        <img
          src="/oldane-graham-nobg.png"
          alt="Oldane Graham"
          className="relative z-10 w-full h-auto object-contain object-bottom rounded-b-[200px] drop-shadow-2xl"
        />

        {/* Floating Badges */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2.5 z-20 
                     -right-[5%] top-[35%]"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <BookOpen size={12} />
          </div>
          <div className="font-bold text-navy text-[11px] uppercase tracking-wide whitespace-nowrap">
            Author
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2.5 z-20 
                     -left-[10%] bottom-[25%]"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users size={12} />
          </div>
          <div className="font-bold text-navy text-[11px] uppercase tracking-wide whitespace-nowrap">
            Project Manager
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute bg-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2.5 z-20 
                     right-[5%] bottom-[5%]"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <TrendingUp size={12} />
          </div>
          <div className="font-bold text-navy text-[11px] uppercase tracking-wide whitespace-nowrap">
            Agile Leader
          </div>
        </motion.div>
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
        <SectionTitle subtitle="About Me">
          Strategy. Execution. Scale.
        </SectionTitle>
        <p className="text-xl font-medium leading-relaxed text-navy mb-6">
          I am a Digital Transformation Strategist and Founder of AgileLab Limited, enabling organizations to modernize their operations through AI-driven delivery, automation, and intelligent process design.
        </p>
        <div className="text-slate-600 leading-loose space-y-4">
          <p>
            With 10+ years leading complex initiatives across telecom, banking, and fintech, I specialize in bridging the gap between vision and execution—delivering scalable, high-impact solutions in fast-moving environments. My work is rooted in strong project management discipline, Agile methodologies, and a relentless focus on efficiency and outcomes.
          </p>
          <p>
            As the creator of Optify, I build AI-powered systems that help businesses optimize workflows, reduce manual effort, and operate with precision at scale.
          </p>
        </div>
      </div>

      <div className="md:col-span-4 relative">
        <div className="p-8 border-l-4 border-blue-600 bg-slate-50 rounded-r-xl">
          <span className="block text-5xl font-display font-bold text-navy">
            10+
          </span>
          <span className="text-slate-500 font-medium uppercase tracking-tighter">
            Years Driving Digital Transformation
          </span>
        </div>
      </div>
    </div>
  </section>
);

const Achievements = () => {
  const items = [
    {
      icon: <Cpu />,
      title: "Optify Platform – AI-Powered Workflow Optimization",
      desc: (
        <div className="space-y-4">
          <p>Designed and built Optify, an AI-driven optimization platform that enables businesses to streamline workflows, eliminate manual processes, and scale productivity with precision.</p>
          <p>Leveraging platforms like Make.com and n8n, I architect end-to-end intelligent workflows tailored to each organization&apos;s operations—transforming fragmented processes into seamless, automated systems.</p>
          <p>From process mapping to deployment, Optify empowers businesses to automate, scale, and innovate with confidence.</p>
        </div>
      ),
    },
    {
      image: "/Agile-Lab-Logo-01.png",
      title: "AgileLab – Global Consulting & Delivery Excellence",
      desc: (
        <div className="space-y-4">
          <p>As Founder of AgileLab Limited, I have led consulting engagements across LATAM, the US, Canada, and the Caribbean—delivering enterprise-grade solutions across telecom, fintech, and digital platforms.</p>
          <p>AgileLab operates at the intersection of strategy, execution, and talent, providing:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>End-to-end project delivery for complex digital initiatives</li>
            <li>Agile team leadership and transformation</li>
            <li>Staff augmentation with high-performing technical and product teams</li>
          </ul>
          <p className="font-medium text-navy">The focus is simple: build strong teams, deliver consistently, and scale intelligently across markets.</p>
        </div>
      ),
    },
    {
      icon: <TrendingUp />,
      title: "AI-Driven Software Platform Development",
      desc: (
        <div className="space-y-4">
          <p>Led the development of rapid, scalable digital solutions across web and mobile platforms by integrating AI into the core of product delivery.</p>
          <p>From concept to production, I design and deliver systems across industries including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Supply Chain</li>
            <li>Banking & Fintech</li>
            <li>HealthTech</li>
            <li>Enterprise Platforms</li>
          </ul>
          <p>By leveraging modern AI tooling and flexible tech stacks, I enable organizations to build faster, adapt quicker, and operate smarter—without being constrained by traditional development cycles.</p>
        </div>
      ),
    },
  ];

  const certifications = [
    {
      title: "Talking to AI: Prompt Engineering for Project Managers",
      issuer: "Project Management Institute",
      date: "Issued Jul 20, 2023",
      image: "/badges/prompt-engineering.png",
    },
    {
      title: "Make Foundation",
      issuer: "Make",
      date: "Issued May 9, 2024",
      image: "/badges/make-foundation.png",
    },
    {
      title: "Practical Application of Gen AI for Project Managers",
      issuer: "Project Management Institute",
      date: "Issued Mar 26, 2024",
      image: "/badges/practical-gen-ai.png",
    },
    {
      title: "Global Young Crew Workshop 2022 Participant",
      issuer: "International Project Management Association",
      date: "Issued Dec 29, 2022",
      image: "/badges/global-young-crew.png",
    },
    {
      title: "PMI Agile Certified Practitioner (PMI-ACP)®",
      issuer: "Project Management Institute",
      date: "Expires Jul 10, 2027",
      image: "/badges/pmi-acp.png",
    },
    {
      title: "Project Management Professional (PMP)®",
      issuer: "Project Management Institute",
      date: "Expires Jun 29, 2026",
      image: "/badges/pmp.png",
    },
    {
      title: "Professional Scrum Master™ I (PSM I)",
      issuer: "Scrum.org",
      date: "Issued May 2, 2020",
      image: "/badges/psm-i.png",
    },
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6">
      <div id="certification" className="mb-24 scroll-mt-24">
        <SectionTitle subtitle="Credentials">
          Certifications & Credentials
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="flex-1">
                <div className="w-24 h-24 mb-6 mx-auto flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold text-navy text-sm leading-snug mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-slate-500 mb-4">{cert.issuer}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <p className="text-xs font-medium text-slate-400">
                  {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://www.credly.com/users/oldane-graham/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-navy font-semibold rounded-xl border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
          >
            View all on Credly{" "}
            <ArrowRight
              size={18}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>

      <div id="experience" className="scroll-mt-24">
        <SectionTitle subtitle="Experience">Key Achievements</SectionTitle>
        <p className="text-xl md:text-2xl text-slate-600 font-light mb-12 max-w-4xl leading-relaxed">
          Across every initiative, the mission remains consistent: turn complexity into clarity, and ideas into scalable execution.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group p-8 bg-white rounded-xl shadow-sm border-t-4 border-slate-100 hover:border-blue-600 transition-all duration-300 shadow-slate-200/50 flex flex-col"
            >
              <div className="text-blue-600 mb-6 transition-transform group-hover:scale-110 duration-300 max-h-12 w-auto">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-10 w-auto object-contain" />
                ) : (
                  item.icon && React.cloneElement(item.icon, { size: 32 })
                )}
              </div>
              <h3 className="text-xl font-display font-bold mb-5 text-navy leading-snug">
                {item.title}
              </h3>
              <div className="text-slate-600 text-sm leading-relaxed flex-1">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BookSection = () => (
  <section
    id="book"
    className="py-24 bg-white relative overflow-hidden border-t border-slate-100"
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
      {/* Book Cover */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-5/12 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 blur-xl rounded-xl group-hover:opacity-30 transition-opacity duration-500" />
          <img
            src="/optimizing-workflows-cover.png"
            alt="Optimizing Project Workflows with AI Book Cover"
            className="relative z-10 w-full max-w-[320px] rounded-r-xl rounded-l-sm shadow-2xl shadow-navy/20 border-l-[12px] border-[#D1D5DB] transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-500"
          />
        </div>
      </motion.div>

      {/* Book Description */}
      <div className="w-full md:w-7/12">
        <SectionTitle subtitle="Published Work">
          Optimizing Project Workflows with AI
        </SectionTitle>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-medium text-navy mb-8 leading-relaxed"
        >
          A Practical Guide to Automating Tasks, Reducing Manual Work, and
          Driving Efficiency Using AI Tools
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h4 className="font-bold text-navy mb-4">You'll discover how to:</h4>
          <ul className="space-y-3 mb-8">
            {[
              "Identify the right processes to automate (and which to keep human)",
              "Build smart workflows that connect apps like Slack, Google Sheets, and Jira",
              "Write powerful prompts that get consistent, reliable results from ChatGPT",
              "Create human-in-the-loop systems that scale intelligently",
              "Reduce errors, save hours, and get more done with less effort",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <div className="mt-1 min-w-[20px] text-blue-600">
                  <CheckCircle2 size={18} />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="https://www.amazon.com/Optimising-Project-Workflows-AI-Practical-ebook/dp/B0G44LWVH5/ref=sr_1_1?crid=QB1THMJGAFOM&dib=eyJ2IjoiMSJ9.kk1Qi_lbbse35qNsE3Gsnw.Ic-0qWp3JK0G4xMu0OImL5rWzc7B_blqA6ZoRdRQaGc&dib_tag=se&keywords=Oldane+Graham&qid=1774201084&s=books&sprefix=oldane+graham%2Cstripbooks%2C170&sr=1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/25 flex justify-center items-center gap-3 hover:scale-105 transition-transform"
          >
            Get it on Amazon <ArrowRight size={20} />
          </a>
          <p className="text-sm text-slate-500 italic max-w-[250px] text-center sm:text-left">
            Build the future of productivity — one automation at a time.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    "Digital Transformation",
    "Agile Leadership",
    "AI & Automation",
    "Project Management (PMP)",
    "Scrum (PSM-I)",
    "Enterprise Strategy",
    "Telecom Solutions",
    "Fintech & Banking",
    "Process Optimization",
    "Stakeholder Management",
    "Product Development",
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section
      id="expertise"
      className="py-20 bg-offwhite relative overflow-hidden text-navy"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-display font-bold mb-12 text-center md:text-left">
          Core Expertise
        </h2>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Transparent gradient masks for smooth edge fading */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-64 bg-gradient-to-r from-offwhite to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-64 bg-gradient-to-l from-offwhite to-transparent z-10 pointer-events-none"></div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marqueeLeft { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          @keyframes marqueeRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }
          .animate-marquee-left { animation: marqueeLeft 80s linear infinite; }
          .animate-marquee-right { animation: marqueeRight 90s linear infinite; }
          .pause-on-hover:hover { animation-play-state: paused; }
        `}} />
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Marquee Row 1 */}
          <div className="flex flex-nowrap gap-8 md:gap-16 w-max ml-8 animate-marquee-left pause-on-hover">
            {duplicatedSkills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-lg sm:text-xl md:text-2xl font-black text-slate-300 tracking-tighter whitespace-nowrap select-none transition-colors duration-300 hover:text-[#2563EB] cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    { name: "Linear", image: "/tools/linear.svg" },
    { name: "Jira", image: "/tools/jira.svg" },
    { name: "MS Project", image: "/tools/ms-project.png" },
    { name: "GanttPRO", image: "/tools/ganttpro.png" },
    { name: "Eraser.io", image: "/tools/eraser-io.png" },
    { name: "Mural", image: "/tools/mural.svg" },
    { name: "Cursor", image: "/tools/cursor.png" },
    { name: "Github", image: "/tools/github.svg" },
    { name: "Figma", image: "/tools/figma.svg" },
    { name: "Confluence", image: "/tools/confluence.svg" }
  ];

  return (
    <section id="tools" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle subtitle="Tech Stack">Tools & Software</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col items-center justify-center p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img src={tool.image} alt={tool.name} className="max-w-full max-h-full object-contain filter group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
              </div>
              <h4 className="font-semibold text-navy text-sm text-center">{tool.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section
    id="connect"
    className="py-32 max-w-[800px] mx-auto px-6 text-center"
  >
    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-navy">
      Let's{" "}
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Connect
      </span>
    </h2>
    <p className="text-slate-600 mb-12 text-lg leading-relaxed">
      Open to strategic consulting, speaking engagements, and high-impact
      digital transformation partnerships.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
      <a
        href="mailto:oldane@agilelab.info"
        className="flex items-center gap-4 text-navy font-semibold group"
      >
        <div className="p-4 bg-slate-100 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
          <Mail size={24} />
        </div>
        oldane@agilelab.info
      </a>
      <a
        href="https://linkedin.com/in/oldane-graham"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 text-navy font-semibold group"
      >
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
      <a href="#" className="hover:text-navy transition-colors">
        AgileLab
      </a>
      <a href="#" className="hover:text-navy transition-colors">
        Optify
      </a>
      <a
        href="https://linkedin.com/in/oldane-graham"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-navy transition-colors"
      >
        LinkedIn
      </a>
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
        <Skills />
        <ToolsSection />
        <Achievements />
        <BookSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
