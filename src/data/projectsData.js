export const PROJECTS_DATA = {
  0: {
    title: "FizzAura Luxury | Fashion",
    subtitle:
      "A dynamic fashion e-commerce platform with product pages, cart, and checkout flow.",
    client: "FizzAura Brand",
    role: "Frontend Developer",
    duration: "3 Weeks",
    year: "2026",
    heroBg: "#0A0A0A",
    accentColor: "#F472B6",
    accentDark: false,
    liveUrl: "https://fizzauraluxury.com",
    tags: ["Dynamic", "E-commerce", "Fashion", "JavaScript"],
    overview:
      "A full luxury fashion e-commerce site for FizzAura — with product catalogue, detail pages, cart management, and a checkout flow.",
    goals: [
      "Build a premium luxury fashion storefront",
      "Cart and checkout functionality",
      "Product filtering and detail pages",
    ],
    problemStatement:
      "FizzAura needed a premium digital storefront that matched their luxury fashion positioning.",
    problemDetail:
      "The brand required a site that felt high-end — with smooth interactions, a refined colour palette, and a complete shopping flow.",
    challenges: [
      {
        title: "Cart state management",
        desc: "Managing add/remove/quantity across page navigation without a framework.",
      },
      {
        title: "Product filtering",
        desc: "Category and price filtering with instant UI updates.",
      },
    ],
    roleDescription:
      "Sole developer — designed and built the entire storefront.",
    responsibilities: [
      "Product catalogue UI",
      "Cart logic",
      "Checkout flow",
      "Responsive design",
    ],
    techStack: [
      { category: "Framework", tools: "React.js" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Payments", tools: "WhatsApp DM" },
      { category: "Fonts", tools: "Montserrat" },
      { category: "Deployment", tools: "Vercel + .COM DOMAIN" },
    ],
    features: [
      {
        title: "Product catalogue with filters",
        desc: "Category and price filtering with live DOM updates and smooth transitions.",
        tech: ["Vanilla JS", "CSS"],
      },
      {
        title: "Cart management",
        desc: "Add, remove, and update cart quantities with localStorage persistence.",
        tech: ["localStorage", "JS state"],
      },
      {
        title: "Checkout flow",
        desc: "Multi-step checkout with form validation and order summary.",
        tech: ["JS forms", "Validation"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Cart persistence across pages",
        detail:
          "Cart data needed to survive page navigation without a framework.",
        solution:
          "Used localStorage to persist cart state, with a JS module to read/write on every page load.",
      },
    ],
    resultsContext: "Live and operating for the FizzAura brand.",
    metrics: [
      { value: "Live", label: "Status" },
      { value: "3wk", label: "Timeline" },
      { value: "3", label: "Core flows" },
    ],
    outcomes: [
      "Live luxury storefront",
      "Full cart and checkout flow",
      "Mobile-first responsive design",
    ],
    learnings: [
      {
        title: "State without a framework",
        desc: "localStorage + JS modules can handle real e-commerce cart state cleanly without React.",
      },
    ],
  },

  1: {
    title: "Home Scents Decor",
    subtitle:
      "An in-progress e-commerce store for a home fragrance and decor brand.",
    client: "Home Scents Decor",
    role: "Frontend Developer",
    duration: "Ongoing",
    year: "2025",
    heroBg: "#1A1208",
    accentColor: "#FBBF24",
    accentDark: true,
    liveUrl: "https://thehomescentsdecor.vercel.app/",
    tags: ["E-commerce", "In Progress", "JavaScript"],
    overview:
      "An ongoing e-commerce build for a home fragrance and decor brand — product listings, a brand story section, and a newsletter capture flow.",
    goals: [
      "Warm, on-brand visual design",
      "Product listings with detail pages",
      "Newsletter capture integration",
    ],
    problemStatement:
      "Home Scents needed an online presence as warm and inviting as their products.",
    problemDetail:
      "The brand's aesthetic — warm, earthy, handcrafted — needed to translate into a digital experience that felt personal, not clinical.",
    challenges: [
      {
        title: "Brand aesthetic in code",
        desc: "Translating a warm, tactile product brand into a web interface.",
      },
      {
        title: "Newsletter integration",
        desc: "Connecting a form to an email marketing platform without a backend.",
      },
    ],
    roleDescription: "Sole developer — currently in active development.",
    responsibilities: [
      "Visual design",
      "Product pages",
      "Newsletter form",
      "Responsive layout",
    ],
    techStack: [
      { category: "Framework", tools: "React.js" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Animation", tools: "Framer Motion - (soon)" },
      { category: "Backend / DB", tools: "Node.js (soon)" },
      { category: "Payments", tools: "Paystack (soon)" },
      { category: "AI", tools: "Anthropic Claude API (soon)" },
      { category: "Fonts", tools: "Inter, Montserrat" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Warm brand design system",
        desc: "Earthy tones, serif typography, and soft layouts that match the product aesthetic.",
        tech: ["CSS", "Google Fonts"],
      },
      {
        title: "Newsletter capture",
        desc: "Email form connected to Mailchimp via embedded form action.",
        tech: ["Mailchimp", "HTML forms"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Conveying brand warmth digitally",
        detail:
          "Digital interfaces can feel cold — the brand needed to feel handcrafted.",
        solution:
          "Used warm cream backgrounds, serif headings, generous whitespace, and organic section dividers.",
      },
    ],
    resultsContext:
      "Currently in progress — core pages built, product detail and cart in development.",
    metrics: [
      { value: "WIP", label: "Status" },
      { value: "2025", label: "Year" },
    ],
    outcomes: [
      "Core pages live on Vercel",
      "Brand aesthetic established",
      "Newsletter capture functional",
    ],
    learnings: [
      {
        title: "Design for the product",
        desc: "The best e-commerce sites feel like an extension of the product itself — not a generic template.",
      },
    ],
  },

  2: {
    title: "Fitin Fashion Brand",
    subtitle:
      "An in-progress fashion brand site with lookbook, product showcase, and brand storytelling.",
    client: "Fitin Brand",
    role: "Frontend Developer",
    duration: "Ongoing",
    year: "2026",
    heroBg: "#0F0F0F",
    accentColor: "#C2A8C0",
    accentDark: true,
    liveUrl: "https://fitin-brand.vercel.app/",
    tags: ["E-commerce", "Fashion", "In Progress"],
    overview:
      "An ongoing fashion brand site for Fitin — featuring a lookbook, product showcase, and brand storytelling sections.",
    goals: [
      "Bold fashion-forward visual identity",
      "Lookbook and product showcase",
      "Brand story and about section",
    ],
    problemStatement:
      "Fitin needed a digital presence as bold and fashion-forward as their clothing.",
    problemDetail:
      "Fashion brands live and die by their visual identity online. Fitin needed a site that immediately communicated their aesthetic.",
    challenges: [
      {
        title: "Fashion-forward visual design",
        desc: "Creating a high-fashion feel with code, not just imagery.",
      },
      {
        title: "Lookbook layout",
        desc: "Building an editorial-style lookbook grid that works across screen sizes.",
      },
    ],
    roleDescription: "Sole developer — currently in active development.",
    responsibilities: [
      "Visual design system",
      "Lookbook grid",
      "Product showcase",
      "Brand storytelling",
    ],
    techStack: [
      { category: "Framework", tools: "React.js" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Animation", tools: "Framer Motion - (soon)" },
      { category: "Backend / DB", tools: "Node.js (soon)" },
      { category: "Payments", tools: "Paystack (soon)" },
      { category: "AI", tools: "Anthropic Claude API (soon)" },
      { category: "Fonts", tools: "Inter, Montserrat" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Editorial lookbook grid",
        desc: "Asymmetric image grid for the brand lookbook with hover reveal effects.",
        tech: ["CSS Grid", "CSS transitions"],
      },
      {
        title: "Product showcase",
        desc: "Full-bleed product imagery with overlay text and CTA buttons.",
        tech: ["CSS", "JS"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "High-fashion feel without heavy assets",
        detail: "Fashion sites need impact but also need to load fast.",
        solution:
          "Used CSS-driven visual effects (mix-blend-mode, clip-path, transforms) for impact without heavy JS.",
      },
    ],
    resultsContext: "Currently in progress — core brand pages built.",
    metrics: [
      { value: "WIP", label: "Status" },
      { value: "2026", label: "Year" },
    ],
    outcomes: [
      "Bold brand identity established",
      "Lookbook grid functional",
      "Live on Vercel",
    ],
    learnings: [
      {
        title: "CSS is a design tool",
        desc: "mix-blend-mode, clip-path, and transforms let you achieve editorial fashion aesthetics purely in CSS.",
      },
    ],
  },

  3: {
    title: "TGGC",
    subtitle:
      "An in-progress nonprofit/community site for a grassroots organisation.",
    client: "TGGC",
    role: "Frontend Developer",
    duration: "Ongoing",
    year: "2026",
    heroBg: "#0B1E0B",
    accentColor: "#4ADE80",
    accentDark: true,
    liveUrl: "https://tggc.vercel.app/",
    tags: ["Nonprofit", "Community", "In Progress"],
    overview:
      "An ongoing website build for TGGC — a grassroots community organisation — covering their mission, programmes, and contact information.",
    goals: [
      "Clear mission and values communication",
      "Programmes and events section",
      "Contact and donation capture",
    ],
    problemStatement:
      "TGGC needed a digital home that communicated their community mission clearly.",
    problemDetail:
      "Nonprofit sites need to be accessible, clear, and trust-building — the design needs to serve the message, not overshadow it.",
    challenges: [
      {
        title: "Trust-building design",
        desc: "Designing a site that builds credibility for a grassroots organisation.",
      },
      {
        title: "Accessible content structure",
        desc: "Making programme and event information easy to navigate.",
      },
    ],
    roleDescription: "Sole developer — currently in active development.",
    responsibilities: [
      "Information architecture",
      "Mission and values layout",
      "Programmes section",
      "Contact form",
    ],
    techStack: [
      { category: "Framework", tools: "React.js" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Backend / DB", tools: "Node.js" },
      { category: "AI", tools: "Anthropic Claude API" },
      { category: "Fonts", tools: "Inter, Montserrat" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Mission-first hero",
        desc: "Hero section leading with the organisation's core mission statement.",
        tech: ["HTML", "CSS"],
      },
      {
        title: "Programmes listing",
        desc: "Card-based layout for programmes with descriptions and CTAs.",
        tech: ["CSS Grid", "JS"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Designing for credibility",
        detail: "Grassroots orgs need to establish trust quickly online.",
        solution:
          "Used clear typography hierarchy, real photography placeholders, and a clean layout that puts mission first.",
      },
    ],
    resultsContext: "Currently in progress.",
    metrics: [
      { value: "WIP", label: "Status" },
      { value: "2026", label: "Year" },
    ],
    outcomes: [
      "Core pages live",
      "Mission clearly communicated",
      "Contact form functional",
    ],
    learnings: [
      {
        title: "Content is design",
        desc: "For nonprofits, the words and hierarchy matter more than visual flair.",
      },
    ],
  },

  4: {
    title: "ACE Leadership Hub",
    subtitle:
      "An in-progress full-stack EdTech platform for Africa's leading leadership development brand — combining a personal brand site, LMS, multi-type assessment engine, blog, and admin dashboard.",
    client: "Daniel Ade-Peters",
    role: "Full-Stack Frontend Developer",
    duration: "Ongoing",
    year: "2026",
    heroBg: "#0A0A0A",
    accentColor: "#D4AF37",
    accentDark: true,
    liveUrl: "https://aceleadership.vercel.app/",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "EdTech",
      "Full-Stack",
    ],
    overview:
      "ACE Leadership Hub is a leadership EdTech platform built for Daniel Ade-Peters — a certified leadership coach, mediator, and speaker based in Lagos. The platform combines a personal brand site, LMS, multi-assessment engine, blog/media library, events system, and a full admin dashboard.",
    overviewExtra:
      "Scoped across three phases over three months contract. Phase 1 covered the public-facing site and assessment flows. Phase 2 covers Supabase integration and the LMS. Phase 3 covers the admin dashboard and Paystack.",
    goals: [
      "Build a premium personal brand site positioning Daniel alongside Tony Robbins and BetterUp",
      "Create a multi-type leadership assessment engine with instant results and programme recommendations",
      "Build a full LMS with programme pages, subscription pricing, and curriculum display",
      "Create a blog/media library handling articles, and YouTube video embeds",
      "Design a reusable architecture ready for Supabase and Paystack in Phase 2",
    ],
    problemStatement:
      "Daniel had no digital presence that matched the calibre of his coaching. His audience was growing but had nowhere to go online.",
    problemDetail:
      "The client needed more than a website — he needed a platform. One that could showcase his brand, host his programmes, capture leads through free assessments, and eventually process payments and host learning content.",
    challenges: [
      {
        title: "No existing brand system",
        desc: "Daniel had a logo but no defined design language, colour system, or typography framework to build from.",
      },
      {
        title: "Complex architecture from day one",
        desc: "The project required multiple distinct user experiences — marketing site, auth flow, assessment, LMS, and admin — all within a single Next.js app.",
      },
      {
        title: "15 programme pages from one template",
        desc: "Building 15 individual programme detail pages without duplicating code required a robust data-driven architecture.",
      },
      {
        title: "4 assessment types with different scoring logic",
        desc: "ACE, DISC, EQ, and Temperament each have different scoring systems, profiles, and result displays.",
      },
    ],
    // roleDescription:
    //   "I was the sole developer — responsible for everything from architecture decisions and design system creation to component development, animation, and deployment — currently in active development.",
    roleDescription:
      "I am the sole developer — currently in active development.",
    responsibilities: [
      "Client communication and brief translation",
      "Next.js app architecture with route groups and dynamic routing",
      "Design system creation — colours, typography, spacing, components",
      "All 20+ page builds from scratch",
      "Assessment engine — scoring logic for 4 assessment types",
      "Reusable data layer (programsData.js, assessmentData.js, blogData.js)",
      "AI chat widget via Anthropic API ( Claude )",
      "Deployment to Vercel",
    ],
    techStack: [
      { category: "Framework", tools: "Next.js 15 (App Router)" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Animation", tools: "Framer Motion" },
      { category: "Backend / DB", tools: "Supabase (Phase 2)" },
      { category: "Payments", tools: "Paystack (Phase 2)" },
      { category: "AI", tools: "Anthropic Claude API" },
      { category: "Fonts", tools: "Inter" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Multi-Type Assessment Engine",
        desc: "4 free leadership assessments — ACE, Temperament, EQ, and DISC. Each has 12 questions, custom scoring, instant results, and personalised programme recommendations.",
        tech: ["React state", "localStorage", "Custom scoring"],
      },
      {
        title: "Dynamic Programme Pages (15 pages, 1 template)",
        desc: "All 15 programme pages powered by a single dynamic [slug] route and a shared programsData.js file.",
        tech: ["Next.js dynamic routes", "generateStaticParams"],
      },
      {
        title: "Blog & Media Library",
        desc: "Unified content hub handling articles, YouTube video embeds, and photo galleries. Filterable by type. YouTube thumbnails auto-generated.",
        tech: ["YouTube embed API", "AnimatePresence"],
      },
      {
        title: "AI Chat Widget",
        desc: "Floating chat widget powered by Anthropic's Claude API. Server-side API route keeps the key secure.",
        tech: ["Anthropic API", "Next.js API route"],
      },
      {
        title: "Login + Auth",
        desc: "Split-screen auth pages.",
        tech: ["AnimatePresence"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Building route groups with separate layouts",
        detail:
          "The app needed 4 completely different layouts: marketing, auth-only, dashboard sidebar, and clean assessment — all within one Next.js project.",
        solution:
          "Used Next.js App Router route groups — (marketing), (auth), (dashboard), and assessment — each with their own layout.js.",
      },
      {
        challenge: "4 assessment types with different scoring logic",
        detail:
          "ACE scores across 3 pillars, Temperament across 4 types, EQ calculates a percentage-based level, and DISC finds a dominant profile.",
        solution:
          "Built a unified scoreAssessment() function that reads score keys dynamically from each question's option data.",
      },
      {
        challenge: "15 programme pages without code duplication",
        detail:
          "The client had 15 programmes across 3 pillars, each needing a full detail page with 8 sections.",
        solution:
          "Built one [slug]/page.js that uses useParams() to fetch the program from programsData.js and renders everything dynamically.",
      },
      {
        challenge: "Framer Motion in Next.js App Router",
        detail:
          "Motion components require 'use client' but many pages mix server and client rendering.",
        solution:
          "Created InView wrapper components that handle useRef + useInView internally, keeping animation logic contained.",
      },
    ],
    // resultsContext:
    //   "Phase 1 delivered within the agreed timeline. The client approved Month 1 deliverables and initiated Phase 2 payment. Platform currently in pre-launch testing.",
    resultsContext:
      "Phase 1 delivered within the agreed timeline. Platform currently in development phase.",
    // metrics: [
    //   { value: "20+", label: "Pages Built" },
    //   { value: "15", label: "Programme Pages" },
    //   { value: "4", label: "Assessment Types" },
    //   { value: "3mo", label: "Timeline" },
    // ],
    metrics: [
      { value: "WIP", label: "Status" },
      { value: "2026", label: "Year" },
    ],
    outcomes: [
      "Delivered a full production-ready Next.js platform within Month 1 scope",
      "Built a complete design system from scratch — no UI library used",
      "Created a data architecture ready for Supabase integration in Phase 2",
      "Client approved all deliverables and signed off on Phase 2 commencement",
      "Platform designed to scale to 500+ users without architectural changes",
      "AI chat widget integrated and functioning with Anthropic Claude API - soon in phase 2",
    ],
    learnings: [
      {
        title: "Architecture decisions compound",
        desc: "Choosing route groups and shared data files early saved weeks of refactoring later.",
      },
      {
        title: "Design systems before components",
        desc: "Establishing the colour language before building any components meant every page felt coherent.",
      },
      {
        title: "Client communication is a feature",
        desc: "Regular check-ins shaped the product significantly — the ACE-as-a-verb direction came from direct client feedback mid-build.",
      },
    ],
  },
};
