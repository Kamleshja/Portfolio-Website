'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Mail,
  ExternalLink,
  Briefcase,
  Code,
  Award,
  Terminal,
  ArrowRight,
  X,
  CheckCircle,
  Moon,
  Sun,
  Cpu,
  Layers,
  Smartphone,
  Database,
  Lock,
  Settings,
  Check,
  Menu,
  ChevronRight,
  Info
} from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


// Data models mapping directly to extracted JSON resume items
const BASICS = {
  name: "Kamlesh Jangley",
  title: "Full Stack .NET Engineer",
  subtitle: "Enterprise Systems & Mobile Architecture",
  email: "kamleshjangley01@gmail.com",
  location: "Raipur (C.G), India",
  availability: "Available for Full Time Roles / Freelance Oppurtunity",
  github: "https://github.com/Kamleshja/",
  linkedin: "https://linkedin.com/in/kamlesh-jangley",
  summary: "Results-driven Full Stack Developer with 4 years of experience in designing and enhancing scalable enterprise platforms using .NET 8, ASP.NET Core Web API, Angular and MS SQL. Experienced in building modular, secure, and compliant applications with strong emphasis on clean architecture, automation, and user-centric design."
};

const METRICS = [
  { value: "30%", label: "API Speed Improvement", description: "Achieved via database indexing & query structure optimization" },
  { value: "4 Years", label: "Enterprise Software Dev", description: "Active architectural design & production deployments" },
  { value: "Clean Architecture", label: "N-Tier & Design Patterns", description: "Strict boundaries between Domain, Application & Data layers" },
  { value: "Cross-Platform", label: "Web & Mobile Ecosystems", description: "Seamless offline sync interfaces using .NET MAUI & Angular" }
];

const PROJECTS = [
  {
    id: "enviromix",
    name: "Enviromix Impact Web & Mobile App",
    shortDesc: "CO₂ emissions tracking and analysis dashboard built with an offline-first architecture.",
    technologies: [".NET 8", "EF Core", "SQL Server", ".NET MAUI", "Chart.js"],
    metrics: "3 remote industrial sites coordinated",
    caseStudy: {
      problem: "Remote field units with unstable cellular connections were unable to log, review, and report environmental compliance metrics in real time. Data gaps led to reporting penalties and architectural silos.",
      solution: "Engineered a cross-platform responsive web application and native mobile client featuring a background offline synchronization layer. Data commits locally during connection dropouts and auto-syncs once cellular arrays are visible.",
      architecture: `
┌────────────────────────────────────────────────────────┐
│               ENVIROMIX ARCHITECTURE                   │
├────────────────────────────────────────────────────────┤
│                                                        │
│  [ Angular 18 Client ]   [ .NET MAUI Client ]          │
│            │                       │                   │
│            └───────────┬───────────┘                   │
│                        ▼                               │
│             [ ASP.NET Core Web API ]                   │
│            (Modular Controller Filter)                 │
│                        │                               │
│              (Entity Framework Core)                   │
│                        ▼                               │
│               [ MS SQL Server DB ]                     │
│                                                        │
└────────────────────────────────────────────────────────┘`,
      challenges: "Synchronizing competing transaction logs from offline clients without creating lock conditions in Entity Framework Core context databases. Resolved by implementing a custom idempotent log queue table with visual vector timestamps.",
      outcome: "Synchronized emissions tracking across three high-throughput factories. Removed manual logging latency, eliminating compliance reporting delays.",
      lessons: "Separating network queue logic from the core UI thread ensures that UI animations remain smooth even during connection drops."
    }
  },
  {
    id: "coral",
    name: "Coral Optimill Tracking Platform",
    shortDesc: "Manufacturing trial reporting with automated background job generation.",
    technologies: [".NET 8", "Angular 18", "ADO.NET", "Azure Blob Storage", "Quartz.NET", "RBAC"],
    metrics: "99.8% background job execution reliability",
    caseStudy: {
      problem: "Manufacturing managers faced substantial administrative delays because critical quality control trial documents (large-scale PDF/Excel datasets) were generated synchronously, causing Web API connection timeouts and page locking.",
      solution: "Built a trial tracking system using Angular 18 and a .NET 8 Web API. Integrated Quartz.NET for background job execution and task distribution, offloading high-impact PDF creation from the active API request pipeline.",
      architecture: `
┌────────────────────────────────────────────────────────┐
│               CORAL OPTIMILL ENGINE                    │
├────────────────────────────────────────────────────────┤
│                                                        │
│  [ Angular 18 Web Interface ] (JWT Session Core)       │
│               │                                        │
│               ▼                                        │
│     [ ASP.NET Core Web API ]                           │
│               ├───> [ Quartz.NET Job Queue ]           │
│               │     (Background PDF Generation Process)│
│               │     └───> Save to [ Azure Blob Store ] │
│               │                                        │
│               └───> [ ADO.NET Direct Queries ]         │
│                     └───> Direct to [ SQL Server ]     │
│                                                        │
└────────────────────────────────────────────────────────┘`,
      challenges: "Generating 100+ page material trial reports with nested statistical models consumed significant memory, resulting in IIS worker process recycling. Solved by streaming datasets sequentially via direct ADO.NET cursors instead of caching large arrays.",
      outcome: "Offloaded report generation to background threads, resolving API timeout issues. Provided trial tracking with role-based access control.",
      lessons: "Using lightweight data access mechanisms (ADO.NET) for heavy analytical reports avoids Entity Framework tracking overhead."
    }
  },
  {
    id: "inventory",
    name: "Enterprise Inventory Management API",
    shortDesc: "Inventory tracking engine conforming to Clean Architecture and strict JWT standards.",
    technologies: [".NET 9 Web API", "EF Core", "SQL Server", "Clean Architecture", "JWT", "Serilog"],
    metrics: "30% endpoint query latency reduction",
    caseStudy: {
      problem: "Legacy inventory tools suffered from high database latency during stock movements, lacked clear security boundaries, and had unmonitored error behaviors that impacted daily operations.",
      solution: "Designed and built an inventory tracking API in .NET 9 Web API using Clean Architecture principles. Standardized security with JWT validation and granular role boundaries.",
      architecture: `
┌────────────────────────────────────────────────────────┐
│               CLEAN ARCHITECTURE CORE                  │
├────────────────────────────────────────────────────────┤
│                                                        │
│     [ Web API (Controllers, Swagger Docs) ]            │
│                       │                                │
│                       ▼                                │
│     [ Infrastructure (EF Core, Serilog Logging) ]      │
│                       │                                │
│                       ▼                                │
│     [ Application (Core Logic, DTOs, Handlers) ]       │
│                       │                                │
│                       ▼                                │
│     [ Domain (Entities, Enterprise Invariants) ]       │
│                                                        │
└────────────────────────────────────────────────────────┘`,
      challenges: "High-volume concurrent stock check-ins caused database locks on warehouse tracking tables. Solved by implementing index tuning, read-uncommitted transactional isolations for queries, and optimistic currency locks.",
      outcome: "Delivered an inventory API with 30% lower endpoint latency. Integrated global middleware exception mapping to record issues automatically in Serilog.",
      lessons: "Strict separation between database schema representations and external API data models prevents validation issues from reaching internal storage structures."
    }
  }
];

const SKILLS_MATRIX = [
  {
    category: "Languages & Runtime Core",
    icon: <Code className="w-5 h-5 text-indigo-500" />,
    skills: [
      { name: "C#", level: 90 },
      { name: "SQL (T-SQL)", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Angular (14-18)", level: 80 }
    ]
  },
  {
    category: "Frameworks & Backend Systems",
    icon: <Layers className="w-5 h-5 text-teal-500" />,
    skills: [
      { name: ".NET Core / .NET 8 & 9", level: 95 },
      { name: "ASP.NET Core Web API", level: 95 },
      { name: "EF Core / EF 6", level: 90 },
      { name: "ADO.NET", level: 85 },
      { name: "ASP.NET Core MVC", level: 80 }
    ]
  },
  {
    category: "Databases & Background Tasks",
    icon: <Database className="w-5 h-5 text-purple-500" />,
    skills: [
      { name: "SQL Server (MS SQL)", level: 90 },
      { name: "PostgreSQL", level: 80 },
      { name: "Quartz.NET", level: 85 },
      { name: "Azure Blob Storage", level: 85 }
    ]
  },
  {
    category: "Architectures, Security & DevOps",
    icon: <Lock className="w-5 h-5 text-amber-500" />,
    skills: [
      { name: "Clean & N-Tier Architecture", level: 90 },
      { name: "JWT Authentication & RBAC", level: 95 },
      { name: "Serilog & Diagnostics", level: 85 },
      { name: ".NET MAUI (Mobile Platforms)", level: 80 },
      { name: "Azure DevOps / GitHub Actions", level: 80 }
    ]
  }
];

const TIMELINE = [
  {
    date: "July 2022 - Present",
    role: "Software Analyst",
    company: "Amicus Technology",
    location: "Raipur (C.G), India",
    achievements: [
      "Designed and enhanced modular RESTful APIs using ASP.NET Core (.NET 8) integrated with Angular 18 client interfaces.",
      "Built native cross-platform mobile apps using .NET MAUI with a synchronized local database cache layer for offline resilience.",
      "Secured application boundaries with JSON Web Token (JWT) validation and granular Role-Based Access Control (RBAC).",
      "Optimized enterprise SQL Server tables, structures, and indexes, lowering endpoint latencies by 30%.",
      "Structured error diagnostics by integrating Serilog output writers linked with diagnostic alarms."
    ]
  },
  {
    date: "March 2021 - June 2021",
    role: "Software Developer Intern",
    company: "Zinota IT Division",
    location: "Bhilai (C.G), India",
    achievements: [
      "Engineered an employee attendance mobile tool using GPS telemetry checks in .NET Core APIs.",
      "Contributed to Pharmacy Management frontends, styling responsive grids with CSS and vanilla JavaScript."
    ]
  }
];

// Canvas Background Particle Component
const ParticleBackground: React.FC<{ theme: string }> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class representing backend service interactions
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = theme === 'dark' ? 'rgba(99, 102, 241, 0.15)' : 'rgba(79, 70, 229, 0.1)';
        c.fill();
      }
    }

    const particles: Particle[] = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint technical lines
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connections
      particles.forEach((p, idx) => {
        p.update();
        p.draw(ctx);

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`
              : `rgba(79, 70, 229, ${0.05 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [syncSimulatorState, setSyncSimulatorState] = useState<'idle' | 'writing' | 'syncing' | 'synced'>('idle');
  const [syncLogs, setSyncLogs] = useState<string[]>(["[MAUI] Device runtime ready", "[MAUI] Storing records locally (offline mode)"]);


  // Synchronize dynamic theme class with document root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-dark', 'theme-light');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  // Toggle Dark/Light Class on Wrapper
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Run MAUI synchronization simulation steps
  const runSyncSimulation = () => {
    if (syncSimulatorState !== 'idle') return;

    setSyncSimulatorState('writing');
    setSyncLogs(prev => [...prev, "[Local DB] Commit: 3 CO2 metric updates logged to SQLite", "[Network] Offline telemetry queue count: 3"]);

    setTimeout(() => {
      setSyncSimulatorState('syncing');
      setSyncLogs(prev => [...prev, "[Network] Cellular array detected. Initializing OAuth...", "[JWT] Handshake success. RBAC token valid for: kamlesh.jangley", "[Gateway] POST /api/v1/metrics/sync -> Payload length: 1.2KB"]);
    }, 2000);

    setTimeout(() => {
      setSyncSimulatorState('synced');
      setSyncLogs(prev => [...prev, "[Gateway] Server response: 200 OK. 3 transactions processed.", "[Local DB] Cache verified. Remote and local logs in sync.", "[MAUI] Offline queue empty."]);
      confetti({
        particleCount: 50,
        spread: 60,
        colors: ['#0d9488', '#6366f1', '#14b8a6']
      });
    }, 4500);
  };

  const resetSyncSimulator = () => {
    setSyncSimulatorState('idle');
    setSyncLogs(["[MAUI] Device runtime ready", "[MAUI] Storing records locally (offline mode)"]);
  };



  return (
    <div className={`theme-${theme} min-h-screen relative overflow-hidden transition-colors duration-300`}>
      <ParticleBackground theme={theme} />

      {/* Main Structural Layout Border Grids */}
      <div className="absolute top-0 bottom-0 left-4 right-4 pointer-events-none border-l border-r border-[var(--border-subtle)] z-10" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[var(--bg-page)]/70 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2 z-50">
            <span className="font-technical text-sm font-bold tracking-widest text-[var(--accent-main)]">
              KAMLESH JANGLEY
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-xs tracking-wider uppercase font-technical text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Featured Projects
            </a>
            <a href="#skills" className="text-xs tracking-wider uppercase font-technical text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Skills Database
            </a>
            <a href="#experience" className="text-xs tracking-wider uppercase font-technical text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Career Timeline
            </a>
            <a href="#contact" className="text-xs tracking-wider uppercase font-technical text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Get in Touch
            </a>
          </nav>

          {/* Toggle Theme / Mobile Trigger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-accent)] transition-colors"
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-primary)]"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-page)] px-6 py-8 flex flex-col space-y-4 md:hidden"
          >
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-technical uppercase tracking-wide py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--border-subtle)]"
            >
              Featured Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-technical uppercase tracking-wide py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--border-subtle)]"
            >
              Skills Database
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-technical uppercase tracking-wide py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-b border-[var(--border-subtle)]"
            >
              Career Timeline
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-technical uppercase tracking-wide py-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 relative z-20">

        {/* HERO SECTION */}
        <section className="pt-20 pb-16 md:pt-32 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* Availability status badge */}
            <div className="inline-flex items-center space-x-2 bg-[var(--bg-card)] border border-[var(--border-subtle)] px-3.5 py-1.5 rounded-full w-fit">
              <span className="status-indicator-dot" />
              <span className="text-[11px] font-technical font-medium tracking-wide text-[var(--teal-main)] uppercase">
                {BASICS.availability}
              </span>
            </div>

            {/* Display title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-[var(--text-primary)] leading-[1.1]">
                Kamlesh Jangley
              </h1>
              <p className="text-xl md:text-2xl font-medium text-[var(--accent-main)]">
                {BASICS.title}
              </p>
            </div>

            {/* Short brand value pitch */}
            <p className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] max-w-xl">
              Results-driven Full Stack Developer with 4 years of experience designing and enhancing scalable enterprise platforms using .NET 8, ASP.NET Core Web API, Angular, and MS SQL. Strong emphasis on clean architecture, automation, and user-centric design.
            </p>

            {/* Action controls */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="magnetic-btn inline-flex items-center px-6 h-12 bg-[var(--accent-main)] text-white text-xs font-technical uppercase font-bold tracking-widest rounded-lg shadow-md hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Explore Projects <ArrowRight className="w-3.5 h-3.5 ml-2" />
              </a>
              <a
                href="#contact"
                className="magnetic-btn inline-flex items-center px-6 h-12 border border-[var(--border-accent)] bg-[var(--bg-card)] text-[var(--text-primary)] text-xs font-technical uppercase font-bold tracking-widest rounded-lg hover:bg-[var(--bg-card-hover)] transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>

            {/* Core Links */}
            <div className="flex items-center space-x-6 pt-4 text-[var(--text-secondary)]">
              <a href={BASICS.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-main)] transition-colors inline-flex items-center text-xs font-technical">
                <GithubIcon className="w-4 h-4 mr-2" /> Github
              </a>
              <a href={BASICS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-main)] transition-colors inline-flex items-center text-xs font-technical">
                <LinkedinIcon className="w-4 h-4 mr-2" /> LinkedIn
              </a>
              <a href={`mailto:${BASICS.email}`} className="hover:text-[var(--accent-main)] transition-colors inline-flex items-center text-xs font-technical">
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
            </div>
          </div>

          {/* Interactive Hero System Visualizer */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[420px] aspect-[4/5] glass-panel p-6 flex flex-col justify-between border-t-2 border-t-[var(--accent-main)]">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[var(--accent-main)]" />
                  <span className="font-technical text-xs font-bold uppercase text-[var(--text-secondary)]">
                    System Monitor V9.2
                  </span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
              </div>

              {/* API and DB visualizer graphs */}
              <div className="flex-1 py-6 flex flex-col justify-between space-y-4">
                {/* Metric 1: Cache hits */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-technical">
                    <span className="text-[var(--text-secondary)]">SYSTEM OVERALL AVAILABILITY</span>
                    <span className="text-[var(--teal-main)]">99.98%</span>
                  </div>
                  <div className="h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--teal-main)] w-[99.98%] rounded-full" />
                  </div>
                </div>

                {/* Metric 2: Thread Pool */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-technical">
                    <span className="text-[var(--text-secondary)]">DATABASE ENDPOINT HIT RATE</span>
                    <span className="text-[var(--accent-main)]">380 req/s</span>
                  </div>
                  <div className="h-1.5 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--accent-main)] w-[75%] rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Simulated database logs */}
                <div className="bg-[var(--terminal-body)] p-3 rounded-lg border border-[var(--border-subtle)] font-technical text-[10px] space-y-1.5 text-zinc-400 overflow-hidden">
                  <div className="text-[var(--teal-main)]">// RUNNING INTEGRATED RECOVERY LOGS</div>
                  <div>[18:37:12] JWT Check: issuer verification successful</div>
                  <div>[18:37:13] EF context caching layer re-indexed</div>
                  <div className="text-zinc-500">[18:37:15] Task Quartz.NET: trial cleanup triggered</div>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] pt-4 flex items-center justify-between text-xs font-technical text-[var(--text-muted)]">
                <span>API THRESHOLD: SECURE</span>
                <span>JWT CORE: ON</span>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS BANNER */}
        <section className="py-12 border-t border-b border-[var(--border-subtle)] bg-[var(--bg-card)]/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {METRICS.map((m, i) => (
              <div key={i} className="flex flex-col space-y-1 px-4 border-l-2 border-[var(--accent-main)]">
                <span className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                  {m.value}
                </span>
                <span className="text-xs font-technical font-bold uppercase text-[var(--text-secondary)]">
                  {m.label}
                </span>
                <span className="text-xs text-[var(--text-muted)]">
                  {m.description}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS PORTFOLIO */}
        <section id="projects" className="py-20 md:py-28">
          <div className="space-y-4 mb-16 text-center max-w-xl mx-auto">
            <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--accent-main)]">
              ENGINEERING LOGS & DEPLOYMENTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Case Studies
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Explore in-depth technical breakdowns highlighting separation of concerns, secure integration layers, and measurable performance wins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                className="glass-panel p-6 flex flex-col justify-between h-[360px] cursor-pointer group"
                onClick={() => setActiveProject(proj)}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-technical font-medium tracking-wide uppercase px-2 py-1 rounded bg-[var(--border-subtle)] text-[var(--accent-main)] border border-[var(--border-subtle)]">
                      CASE {idx + 1}
                    </span>
                    <span className="text-xs font-technical text-[var(--teal-main)] font-semibold">
                      {proj.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold group-hover:text-[var(--accent-main)] transition-colors leading-snug">
                    {proj.name}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {proj.shortDesc}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tag list */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-technical uppercase px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-page)]">
                        {tag}
                      </span>
                    ))}
                    {proj.technologies.length > 3 && (
                      <span className="text-[9px] font-technical uppercase px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-muted)] bg-[var(--bg-page)]">
                        +{proj.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="border-t border-[var(--border-subtle)] pt-4 flex items-center justify-between text-xs font-technical text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                    <span>EXPLORE INTEGRATION SPECS</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT CASE STUDY SLIDE PANEL MODAL */}
        <AnimatePresence>
          {activeProject && (
            <>
              {/* Overlay backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
                onClick={() => setActiveProject(null)}
              />

              {/* Side Panel Drawer */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-[var(--bg-card)] border-l border-[var(--border-subtle)] p-6 md:p-8 overflow-y-auto text-[var(--text-primary)]"
              >
                {/* Close and Header controls */}
                <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--accent-main)]">
                      INTEGRATION SYSTEM ARCHITECTURE
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Case Study Metadata */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {activeProject.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {activeProject.technologies.map((t, idx) => (
                        <span key={idx} className="text-xs font-technical uppercase px-2.5 py-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-page)] text-[var(--text-secondary)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High level outcome */}
                  <div className="p-4 rounded-lg bg-[var(--bg-page)] border-l-4 border-[var(--teal-main)] border border-[var(--border-subtle)] flex items-start space-x-3">
                    <Award className="w-5 h-5 text-[var(--teal-main)] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-technical uppercase font-bold text-[var(--text-secondary)]">MEASURED PERFORMANCE WINS</div>
                      <p className="text-sm font-medium text-[var(--text-primary)] mt-0.5">{activeProject.metrics}</p>
                    </div>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-[var(--text-secondary)] font-bold text-xs uppercase font-technical">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                        {activeProject.caseStudy.problem}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-[var(--text-secondary)] font-bold text-xs uppercase font-technical">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span>The Resolution</span>
                      </div>
                      <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                        {activeProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Visual ASCII system architecture layout */}
                  <div className="space-y-2">
                    <div className="text-[var(--text-secondary)] font-bold text-xs uppercase font-technical">
                      Architectural Block Layout
                    </div>
                    <pre className="p-4 rounded-lg bg-[var(--terminal-body)] border border-[var(--border-subtle)] font-technical text-[10px] text-zinc-400 overflow-x-auto leading-relaxed">
                      {activeProject.caseStudy.architecture}
                    </pre>
                  </div>

                  {/* Key Implementation roadblocks */}
                  <div className="space-y-2">
                    <div className="text-[var(--text-secondary)] font-bold text-xs uppercase font-technical">
                      Key Structural Challenge & Mitigation
                    </div>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {activeProject.caseStudy.challenges}
                    </p>
                  </div>

                  {/* Quantitative outcome & Lessons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
                    <div className="space-y-1">
                      <div className="text-xs font-technical uppercase font-bold text-[var(--text-secondary)]">BUSINESS VALUE DELIVERED</div>
                      <p className="text-xs text-[var(--text-secondary)]">{activeProject.caseStudy.outcome}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs font-technical uppercase font-bold text-[var(--text-secondary)]">SYSTEM LESSONS GAINED</div>
                      <p className="text-xs text-[var(--text-secondary)]">{activeProject.caseStudy.lessons}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* TECHNICAL SKILLS DATABASE */}
        <section id="skills" className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
          <div className="space-y-4 mb-16 text-center max-w-xl mx-auto">
            <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--accent-main)]">
              STACK TAXONOMY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Technical Skill Matrix
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Predefined system competencies structured by architectural layer. Hovering reveals specific domain skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS_MATRIX.map((group, idx) => (
              <div key={idx} className="glass-panel p-6 border-t-2 border-t-[var(--accent-main)]">
                <div className="flex items-center space-x-3 mb-6">
                  {group.icon}
                  <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 group/skill">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-[var(--text-secondary)] group-hover/skill:text-[var(--text-primary)] transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-technical text-[var(--text-muted)] group-hover/skill:text-[var(--accent-main)] transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-[var(--border-subtle)] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[var(--accent-main)] rounded-full group-hover/skill:brightness-110 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAREER TIMELINE */}
        <section id="experience" className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
          <div className="space-y-4 mb-16 text-center max-w-xl mx-auto">
            <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--accent-main)]">
              CHRONOLOGICAL CHANNELS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Enterprise Experience Timeline
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Chronological history of design, optimization, and code execution in professional operations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative pl-6 border-l-2 border-[var(--border-subtle)] space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--bg-page)] border-2 border-[var(--accent-main)] group-hover:bg-[var(--accent-main)] transition-colors duration-300 z-10" />

                <div className="glass-panel p-6 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4 mb-4">
                    <div>
                      <span className="text-[10px] font-technical font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-[var(--border-subtle)] text-[var(--accent-main)] border border-[var(--border-subtle)]">
                        {item.date}
                      </span>
                      <h3 className="text-lg font-bold mt-1 text-[var(--text-primary)]">
                        {item.role}
                      </h3>
                    </div>
                    <div className="text-left md:text-right font-technical">
                      <div className="text-sm font-bold text-[var(--text-secondary)]">{item.company}</div>
                      <div className="text-[10px] text-[var(--text-muted)]">{item.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] list-disc pl-4 leading-relaxed">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="hover:text-[var(--text-primary)] transition-colors">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOBILE FOCUS (MAUI SHOWCASE) & ARCHITECTURE PHILOSOPHY */}
        <section className="py-20 md:py-28 border-t border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--teal-main)]">
              MOBILE & OFFLINE INFRASTRUCTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              MAUI Offline Synchronization Showcase
            </h2>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Designing cross-platform native interfaces in **.NET MAUI** requires robust handling of network disconnections.
              Our architecture maintains transactional parity by executing local changes in a secure client-side database, deferring cloud synchronization until API gateways report full connection availability.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded bg-[var(--border-subtle)] mt-0.5">
                  <Check className="w-4 h-4 text-[var(--teal-main)]" />
                </div>
                <div>
                  <h4 className="text-xs font-technical font-bold uppercase text-[var(--text-primary)]">SQLite Transaction Commits</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Local user actions store serialized model operations internally prior to connection verification.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-1.5 rounded bg-[var(--border-subtle)] mt-0.5">
                  <Check className="w-4 h-4 text-[var(--teal-main)]" />
                </div>
                <div>
                  <h4 className="text-xs font-technical font-bold uppercase text-[var(--text-primary)]">Granular JWT Token Exchange</h4>
                  <p className="text-xs text-[var(--text-secondary)]">Client checks role validation rules locally, reducing redundant request round-trips over mobile data pools.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={runSyncSimulation}
                disabled={syncSimulatorState !== 'idle'}
                className="magnetic-btn inline-flex items-center px-6 h-12 bg-[var(--teal-main)] text-white text-xs font-technical uppercase font-bold tracking-widest rounded-lg hover:brightness-110 disabled:opacity-50 transition-all duration-200"
              >
                {syncSimulatorState === 'idle' && "Simulate Sync Execution"}
                {syncSimulatorState === 'writing' && "Writing to local DB..."}
                {syncSimulatorState === 'syncing' && "Validating Token & Sending Payload..."}
                {syncSimulatorState === 'synced' && "Sync parity achieved"}
              </button>
              {syncSimulatorState !== 'idle' && (
                <button
                  onClick={resetSyncSimulator}
                  className="text-xs font-technical ml-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] underline"
                >
                  Reset simulator
                </button>
              )}
            </div>
          </div>

          {/* Interactive Mobile Sync Simulator Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[300px] aspect-[9/18] rounded-[36px] border-[6px] border-slate-700 bg-slate-900 shadow-2xl overflow-hidden relative flex flex-col">
              {/* Speaker and Camera notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-20 flex items-center justify-center">
                <span className="w-10 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Status bar */}
              <div className="h-8 bg-slate-800 pt-2 px-6 flex justify-between items-center text-[9px] font-technical text-zinc-400 z-10">
                <span>18:37 AM</span>
                <div className="flex items-center space-x-1">
                  <span>JWT: OK</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--teal-main)]" />
                </div>
              </div>

              {/* Mobile device UI view */}
              <div className="flex-1 bg-slate-950 p-4 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  <div className="border-b border-zinc-800 pb-2 flex justify-between items-center">
                    <span className="font-technical text-[10px] font-bold text-zinc-400">ENVIROMIX IMPACT MOBILE</span>
                    <Smartphone className="w-3.5 h-3.5 text-[var(--teal-main)] animate-pulse" />
                  </div>

                  {/* Synchronization visualization indicators */}
                  <div className="bg-slate-900/50 p-3 rounded-lg border border-zinc-800/80 text-center space-y-2">
                    <div className="text-[9px] uppercase font-technical text-zinc-400 tracking-wider">Device Synchronization Queue</div>
                    <div className="text-xl font-extrabold tracking-tight text-white">
                      {syncSimulatorState === 'idle' && "3 Pending Entries"}
                      {syncSimulatorState === 'writing' && "Commiting SQLite Transactions..."}
                      {syncSimulatorState === 'syncing' && "Uploading payload..."}
                      {syncSimulatorState === 'synced' && "Data Synced"}
                    </div>
                    <div className="text-[8px] font-technical text-[var(--teal-main)] font-medium">
                      {syncSimulatorState === 'synced' ? "STATUS: CLOUD REPLICATED" : "STATUS: LOCAL STORAGE"}
                    </div>
                  </div>
                </div>

                {/* Simulated live console logs inside the phone */}
                <div className="flex-1 my-4 bg-black/80 rounded-lg p-2.5 font-technical text-[8px] text-zinc-400 overflow-y-auto leading-relaxed border border-zinc-800">
                  {syncLogs.map((log, idx) => (
                    <div key={idx} className="border-b border-zinc-900 pb-1 mb-1">
                      {log}
                    </div>
                  ))}
                </div>

                {/* Mock bottom button */}
                <button
                  onClick={runSyncSimulation}
                  disabled={syncSimulatorState !== 'idle'}
                  className="w-full py-2 bg-zinc-800 border border-zinc-700/50 text-[10px] font-technical uppercase text-zinc-300 font-bold rounded hover:bg-zinc-700 transition-colors disabled:opacity-50"
                >
                  {syncSimulatorState === 'idle' ? "Trigger DB Sync" : "Sync active"}
                </button>
              </div>

              {/* Bottom home handle bar */}
              <div className="h-4 bg-slate-950 flex items-center justify-center">
                <span className="w-20 h-1 bg-slate-700 rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE PHILOSOPHY DETAILED SYSTEM */}
        <section className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
          <div className="space-y-4 mb-16 text-center max-w-xl mx-auto">
            <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--accent-main)]">
              SYSTEM CONVENTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Development Philosophy
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base">
              Core rules that govern every deployment to ensure reliability, extensibility, and security under load.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-6 border-t-2 border-t-[var(--accent-main)]">
              <div className="p-3 rounded-lg bg-[var(--border-subtle)] w-fit mb-6">
                <Layers className="w-5 h-5 text-[var(--accent-main)]" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                Architectural Segregation
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Utilize strict Clean and N-Tier Architecture patterns. Business invariants live independently of data access rules and API delivery layers, maintaining code testability and reducing coupling.
              </p>
            </div>

            <div className="glass-panel p-6 border-t-2 border-t-[var(--teal-main)]">
              <div className="p-3 rounded-lg bg-[var(--border-subtle)] w-fit mb-6">
                <Cpu className="w-5 h-5 text-[var(--teal-main)]" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                Proactive Performance Indexing
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Prevent runtime degradation at the database layer. Every complex Entity Framework query undergoes tracing to ensure index matches, direct ADO.NET paths are utilized where speed is paramount, and execution contexts utilize strict transaction boundaries.
              </p>
            </div>

            <div className="glass-panel p-6 border-t-2 border-t-purple-500">
              <div className="p-3 rounded-lg bg-[var(--border-subtle)] w-fit mb-6">
                <Lock className="w-5 h-5 text-purple-500" />
              </div>
              <h3 className="font-technical text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                Granular Authentication Auditing
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Every endpoint is closed by default. Granular JWT authorization keys enforce specific Role-Based Access Control filters, and error routing records diagnostic traces inside Serilog channels.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Direct Info & Context */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-technical uppercase font-bold tracking-widest text-[var(--teal-main)]">
                LET'S CONNECT
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Get In Touch
              </h2>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-xl">
                Based in Raipur, C.G., India — open to remote and hybrid opportunities worldwide. Let's build something great together.
              </p>

              {/* Contact List */}
              <div className="space-y-4 pt-4">

                {/* Email Item */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--teal-main)] group-hover:border-[var(--teal-main)] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-technical uppercase text-[var(--text-muted)]">EMAIL DIRECT</div>
                    <a
                      href={`mailto:${BASICS.email}`}
                      className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--teal-main)] transition-colors"
                    >
                      {BASICS.email}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent-main)] group-hover:border-[var(--accent-main)] transition-colors duration-300">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-technical uppercase text-[var(--text-muted)]">PROFESSIONAL CHANNEL</div>
                    <a
                      href={BASICS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-main)] transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                {/* GitHub Item */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--text-secondary)] group-hover:border-[var(--text-primary)] transition-colors duration-300">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-technical uppercase text-[var(--text-muted)]">DEVELOPER PLATFORM</div>
                    <a
                      href={BASICS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-main)] transition-colors"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center space-x-4 group">
                  <div className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] text-red-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-technical uppercase text-[var(--text-muted)]">LOCATION BASE</div>
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      Raipur, Chhattisgarh, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Premium Collaboration CTA Card */}
            <div className="lg:col-span-5 relative flex justify-center w-full">
              <div className="w-full glass-panel p-8 flex flex-col justify-between border-t-2 border-t-[var(--accent-main)] rounded-2xl relative overflow-hidden">

                {/* Card Background subtle gradient bubble */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--accent-main)] opacity-10 rounded-full blur-2xl" />

                <div className="space-y-6 text-center my-auto py-6">
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                    Ready to collaborate?
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-[var(--text-secondary)]">
                    Whether it's a scalable API, a full-stack web app, or a cross-platform mobile solution — I bring 4+ years of enterprise .NET experience to the table.
                  </p>

                  <div className="pt-4">
                    <a
                      href={`mailto:${BASICS.email}?subject=Project Collaboration / Inquiry`}
                      className="magnetic-btn inline-flex items-center justify-center space-x-2 px-8 h-12 bg-gradient-to-r from-[var(--teal-main)] to-[var(--accent-main)] text-white text-xs font-technical uppercase font-bold tracking-widest rounded-lg shadow-lg hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4 shrink-0" />
                      <span>Send an Email</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-page)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-1">
            <span className="font-technical text-xs font-bold tracking-wider text-[var(--accent-main)] uppercase">
              Kamlesh Jangley
            </span>
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider font-technical">
              Full Stack .NET Developer © 2026. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-technical">
            <a href={BASICS.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-main)] transition-colors">
              Github
            </a>
            <a href={BASICS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent-main)] transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${BASICS.email}`} className="text-[var(--text-secondary)] hover:text-[var(--accent-main)] transition-colors">
              Direct Mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
