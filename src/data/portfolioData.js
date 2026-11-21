// Central Portfolio Data Configuration
// Easily customize all content on your portfolio website here!

export const PORTFOLIO_DATA = {
  personal: {
    name: "YOUR NAME",
    shortName: "portfolio",
    title: "Full-Stack Developer & AI Explorer",

    subtitle: "Informatics Student — UNTIRTA",
    tagline: "Thinking in code. Building with care.",
    heroHeadline: {
      part1: "I turn ",
      accent1: "ideas",
      part2: " into working ",
      accent2: "software",
    },
    bioShort:
      "Informatics student crafting clean, performant web & mobile applications with React, Next.js, Laravel, Python, and Flutter — turning complex requirements into intuitive user experiences.",
    bioLong:
      "I explore the frontier of modern web development and applied Artificial Intelligence — grounding language models in real data, engineering scalable backend services, and wrapping them in pixel-perfect, responsive interfaces.",
    availability: "Available for Projects & Full-Time",
    location: "Banten, ID · GMT+7",
    profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Projects Shipped", value: "15+" },
      { label: "Tech Stack", value: "12+" },
      { label: "Client Satisfaction", value: "100%" },
    ],
  },

  socials: {
    email: "fikri.assidiq@example.com",
    github: "https://github.com/amdfikri",
    linkedin: "https://linkedin.com/in/amdfikri",
    instagram: "https://instagram.com/amdfikriasq",
    twitter: "https://twitter.com/amdfikri",
    whatsapp: "https://wa.me/6281234567890",
  },

  categories: [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI / Machine Learning" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Development" },
  ],

  projects: [
    {
      id: "resbot",
      number: "01",
      title: "ResBot: Bilingual AI HR Assistant",
      subtitle: "Grounded RAG Assistant for Enterprise HR",
      category: "ai",
      categoryLabel: "AI / Machine Learning",
      description:
        "Built a grounded, bilingual HR chatbot that cites its source documents with an in-app preview, refuses to guess on sensitive topics, and escalates to human managers when confidence is low.",
      featured: true,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tags: ["RAG", "LangChain", "FAISS", "Python", "FastAPI", "React"],
      techIcons: ["Python", "React", "FastAPI", "PostgreSQL"],
      details: {
        problem:
          "Enterprise HR teams spend hundreds of hours answering repetitive policy questions while risking inaccuracies regarding leave policies, medical benefits, and compensation.",
        solution:
          "Engineered a Retrieval-Augmented Generation (RAG) system utilizing FAISS vector store and LangChain. Integrated source document line-attribution so employees can verify exact policy references directly inside the chat interface.",
        highlights: [
          "Bilingual support (Indonesian & English) with auto-language detection.",
          "Strict hallucination guardrails & automatic fallback human escalation trigger.",
          "In-app PDF document viewer with highlighted citations.",
          "Sub-400ms vector search retrieval performance.",
        ],
        liveUrl: "https://demo.resbot.ai",
        githubUrl: "https://github.com/amdfikri/resbot-ai",
      },
    },
    {
      id: "poge",
      number: "02",
      title: "Poge — Client-Side Portfolio Builder",
      subtitle: "Instant Self-Owned Portfolio Generator",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Shipped a lightweight client-side portfolio builder that turns raw user inputs into downloadable, zero-dependency self-owned HTML/CSS portfolio packages.",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      techIcons: ["React", "TailwindCSS", "JavaScript"],
      details: {
        problem:
          "Developers and creators want clean personal sites without paying monthly subscriptions or getting locked into rigid CMS platforms.",
        solution:
          "Created a client-side reactive builder with live split-screen preview, theme switching, and instant single-file ZIP export.",
        highlights: [
          "100% client-side compilation — no backend data tracking.",
          "Custom design tokens generator & responsive preview modes.",
          "One-click zip export ready for Vercel, Netlify, or GitHub Pages.",
        ],
        liveUrl: "https://poge-builder.vercel.app",
        githubUrl: "https://github.com/amdfikri/poge-builder",
      },
    },
    {
      id: "woofiecat",
      number: "03",
      title: "Woofiecat Pet E-Commerce Platform",
      subtitle: "Full-Stack Pet Care Marketplace",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Built a modern pet-store e-commerce platform with real-time inventory management, automated payment gateway integration, and shipping cost calculations.",
      featured: true,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind"],
      techIcons: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      details: {
        problem:
          "Pet specialty stores need unified online catalog browsing, grooming appointment booking, and automated courier dispatch.",
        solution:
          "Developed a full-stack Next.js App Router platform powered by PostgreSQL & Prisma, with automated payment webhook handlers.",
        highlights: [
          "Optimized catalog filtering & full-text search.",
          "Multi-courier shipping API integration.",
          "Admin dashboard for order fulfillment & stock management.",
        ],
        liveUrl: "https://woofiecat.store",
        githubUrl: "https://github.com/amdfikri/woofiecat-ecommerce",
      },
    },
    {
      id: "preventive-mobile",
      number: "04",
      title: "Preventive Maintenance Mobile App",
      subtitle: "Industrial Inspection Checklist App",
      category: "mobile",
      categoryLabel: "Mobile Development",
      description:
        "Built a cross-platform mobile app helping plant maintenance engineers conduct digital equipment inspections with offline synchronization and photo attachments.",
      featured: true,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      tags: ["Flutter", "Dart", "Supabase", "Offline Sync"],
      techIcons: ["Flutter", "Dart", "Supabase"],
      details: {
        problem:
          "Industrial inspectors rely on paper checklists, resulting in delayed maintenance reports and unrecorded equipment failures.",
        solution:
          "Created a Flutter application with local SQLite caching that synchronizes to Supabase when network connection is restored.",
        highlights: [
          "Camera integration with photo markup annotations.",
          "QR code scanner for instant equipment lookup.",
          "PDF report auto-generation for supervisor sign-off.",
        ],
        liveUrl: "https://github.com/amdfikri/preventive-maintenance-app",
        githubUrl: "https://github.com/amdfikri/preventive-maintenance-app",
      },
    },
    {
      id: "bitblox",
      number: "05",
      title: "Bitblox Digital Top-Up Store",
      subtitle: "Game Voucher Platform",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Engineered an automated gaming top-up store featuring instant order status tracking, local e-wallet payments, and Discord admin notification hooks.",
      featured: false,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
      techIcons: ["Next.js", "PostgreSQL", "Prisma"],
      details: {
        problem:
          "Gamers experience slow manual voucher processing during high-demand game drops.",
        solution:
          "Automated product delivery via background workers and direct webhook triggers.",
        highlights: [
          "Sub-1-second order receipt status lookup.",
          "Discord bot notification webhooks for instant order alerts.",
        ],
        liveUrl: "https://bitblox.store",
        githubUrl: "https://github.com/amdfikri/bitblox-topup",
      },
    },
    {
      id: "alfikrimotor",
      number: "06",
      title: "Alfikrimotor Vehicles Showroom",
      subtitle: "Digital Vehicle Catalog & Booking",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Built a searchable vehicle catalog that converts offline used-car showroom inquiries into a digital lead generation pipeline with WhatsApp booking.",
      featured: false,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      tags: ["Next.js", "Tailwind", "PostgreSQL", "Prisma"],
      techIcons: ["Next.js", "Tailwind", "PostgreSQL"],
      details: {
        problem:
          "Physical showrooms lose potential online buyers due to slow manual vehicle specs sharing.",
        solution:
          "Designed a fast, responsive inventory search portal with high-resolution photo galleries and dynamic financing calculator.",
        highlights: [
          "Dynamic filter by brand, price range, transmission, and year.",
          "Integrated credit installment estimator tool.",
        ],
        liveUrl: "https://alfikrimotor.com",
        githubUrl: "https://github.com/amdfikri/alfikrimotor-showroom",
      },
    },
    {
      id: "hmif-web",
      number: "07",
      title: "Official HMIF UNTIRTA Portal",
      subtitle: "Informatics Student Association Platform",
      category: "web",
      categoryLabel: "Web Development",
      description:
        "Built the official student association website for publishing academic events, news updates, leadership structure, and organizational study resources.",
      featured: false,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      tags: ["Laravel", "Tailwind", "MySQL", "PHP"],
      techIcons: ["Laravel", "PHP", "MySQL"],
      details: {
        problem:
          "Department announcements and student event sign-ups were scattered across multiple unofficial social channels.",
        solution:
          "Centralized all student activities, downloadable past exam papers, and division blogs into a unified Laravel CMS portal.",
        highlights: [
          "Role-based access for student council board members.",
          "Event registration system with QR check-in.",
        ],
        liveUrl: "https://hmif-untirta.or.id",
        githubUrl: "https://github.com/amdfikri/hmif-untirta-web",
      },
    },
  ],

  skills: [
    {
      category: "Frontend Engineering",
      items: [
        { name: "React / React Native", level: "Advanced", icon: "Code2" },
        { name: "Next.js (App Router)", level: "Advanced", icon: "Globe" },
        { name: "TypeScript / JavaScript", level: "Advanced", icon: "FileCode" },
        { name: "Tailwind CSS", level: "Expert", icon: "Palette" },
        { name: "HTML5 / WebGL Canvas", level: "Advanced", icon: "Layout" },
      ],
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js / Express", level: "Advanced", icon: "Server" },
        { name: "Python / FastAPI / Flask", level: "Advanced", icon: "Terminal" },
        { name: "Laravel / PHP", level: "Intermediate", icon: "Cpu" },
        { name: "REST APIs & Webhooks", level: "Advanced", icon: "Network" },
      ],
    },
    {
      category: "Database & AI Cloud",
      items: [
        { name: "PostgreSQL / Prisma", level: "Advanced", icon: "Database" },
        { name: "Supabase / Firebase", level: "Advanced", icon: "Cloud" },
        { name: "LangChain & Vector DBs (FAISS)", level: "Intermediate", icon: "Sparkles" },
        { name: "MySQL / SQLite", level: "Advanced", icon: "HardDrive" },
      ],
    },
    {
      category: "Mobile & Tools",
      items: [
        { name: "Flutter / Dart", level: "Intermediate", icon: "Smartphone" },
        { name: "Git / GitHub Actions", level: "Advanced", icon: "GitBranch" },
        { name: "Vercel / Docker", level: "Intermediate", icon: "Box" },
        { name: "Figma UI/UX Design", level: "Advanced", icon: "Figma" },
      ],
    },
  ],

  timeline: [
    {
      period: "2022 — Present",
      role: "Informatics Engineering Student",
      organization: "UNTIRTA (Universitas Sultan Ageng Tirtayasa)",
      description:
        "Focusing on Software Engineering, Data Structures, Applied Artificial Intelligence, and Web Development. Active member of HMIF student council.",
    },
    {
      period: "2024 — Present",
      role: "Full-Stack Software Engineer (Freelance)",
      organization: "Self-Employed",
      description:
        "Designing and shipping web applications, API microservices, and mobile checklist tools for regional clients and academic institutions.",
    },
    {
      period: "2023 — 2024",
      role: "Frontend Developer Intern",
      organization: "Digital Tech Studio",
      description:
        "Built responsive client portals with Next.js and Tailwind CSS, improved web accessibility scores, and integrated RESTful endpoints.",
    },
  ],
};
