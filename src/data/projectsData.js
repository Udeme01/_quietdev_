export const PROJECTS_DATA = {
  0: {
    title: "Comfy House Furnitures",
    subtitle:
      "A static e-commerce furniture site built with HTML, CSS, JavaScript and Contentful CMS.",
    client: "Personal Project",
    role: "Frontend Developer",
    duration: "2 Weeks",
    year: "2024",
    heroBg: "#0D1117",
    accentColor: "#6AA7B7",
    accentDark: false,
    liveUrl: "https://comfyhousefurnitures.vercel.app",
    tags: ["HTML", "CSS", "JavaScript", "Contentful CMS", "Static"],
    overview:
      "A fully responsive furniture e-commerce landing page built using vanilla HTML, CSS and JavaScript with Contentful as a headless CMS for product data.",
    goals: [
      "Build a pixel-perfect, fully responsive furniture storefront",
      "Integrate Contentful CMS for dynamic product listings",
      "Optimise for fast load times with no framework overhead",
    ],
    problemStatement:
      "A clean, shoppable furniture experience with zero framework dependency.",
    problemDetail:
      "The goal was to build a performant static site that still felt dynamic — pulling real product data from a CMS without React or Next.js.",
    challenges: [
      {
        title: "CMS integration without a framework",
        desc: "Fetching and rendering Contentful data using vanilla JS fetch API.",
      },
      {
        title: "Responsive layout complexity",
        desc: "Achieving a polished grid layout across all screen sizes with pure CSS.",
      },
    ],
    roleDescription:
      "Sole developer — designed and built the entire site from scratch.",
    responsibilities: [
      "UI design and layout",
      "Contentful CMS setup",
      "JavaScript fetch + render logic",
      "Responsive CSS",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3 (Flexbox + Grid)" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "CMS", tools: "Contentful" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Contentful-powered product listings",
        desc: "Products fetched dynamically from Contentful at runtime using the Delivery API.",
        tech: ["Contentful API", "Fetch API"],
      },
      {
        title: "Fully responsive layout",
        desc: "CSS Grid and Flexbox used throughout for a mobile-first, multi-column layout.",
        tech: ["CSS Grid", "Flexbox"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Fetching CMS data without a framework",
        detail:
          "No React or Next.js meant manual fetch calls and DOM manipulation.",
        solution:
          "Built a lightweight async render pipeline using vanilla fetch + template literals to inject product cards.",
      },
    ],
    resultsContext:
      "Delivered on time as a portfolio project demonstrating CMS integration without a framework.",
    metrics: [
      { value: "100%", label: "Vanilla JS" },
      { value: "2wk", label: "Timeline" },
      { value: "CMS", label: "Contentful" },
    ],
    outcomes: [
      "Fully functional CMS-driven product page",
      "Mobile-first responsive design",
      "Deployed and live on Vercel",
    ],
    learnings: [
      {
        title: "Vanilla JS is powerful",
        desc: "Building without a framework sharpened my understanding of the DOM and async patterns.",
      },
      {
        title: "CMS flexibility",
        desc: "Contentful's delivery API is straightforward and decouples content from code cleanly.",
      },
    ],
  },

  1: {
    title: "Rooms Homepage",
    subtitle:
      "A clean interior design landing page with slide-in navigation and responsive hero layout.",
    client: "Frontend Mentor Challenge",
    role: "Frontend Developer",
    duration: "1 Week",
    year: "2023",
    heroBg: "#111",
    accentColor: "#C9B99A",
    accentDark: true,
    liveUrl: "https://rooms-homepage-ecom.netlify.app/#",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    overview:
      "A Frontend Mentor challenge — a high-fidelity homepage for a furniture/interior brand with a custom slide-in mobile nav and full-bleed hero imagery.",
    goals: [
      "Pixel-perfect recreation of the Rooms homepage design",
      "Custom animated mobile navigation",
      "Clean responsive layout",
    ],
    problemStatement:
      "Recreate a premium interior design homepage with precise layout and behaviour.",
    problemDetail:
      "This challenge required precise CSS positioning, a custom hamburger nav, and a hero slider — all without any libraries.",
    challenges: [
      {
        title: "Custom slide-in nav",
        desc: "Building a smooth mobile navigation overlay with pure CSS transitions.",
      },
      {
        title: "Hero image slider",
        desc: "Left/right arrow navigation with JS-driven slide transitions.",
      },
    ],
    roleDescription: "Sole developer on a Frontend Mentor challenge build.",
    responsibilities: [
      "HTML/CSS layout",
      "JS slider logic",
      "Mobile nav behaviour",
      "Cross-browser testing",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "Deployment", tools: "Netlify" },
    ],
    features: [
      {
        title: "Animated mobile navigation",
        desc: "Slide-in overlay nav triggered by a hamburger icon — pure CSS transitions.",
        tech: ["CSS transitions", "JS toggle"],
      },
      {
        title: "Hero image slider",
        desc: "Arrow-driven full-bleed image carousel with JS index tracking.",
        tech: ["Vanilla JS", "CSS transitions"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Slide-in nav without a library",
        detail: "Needed smooth overlay nav with no external dependencies.",
        solution:
          "Used CSS transform: translateX and a JS class toggle to animate the nav panel in and out.",
      },
    ],
    resultsContext:
      "Completed as a Frontend Mentor challenge — strong match to the original design spec.",
    metrics: [
      { value: "100%", label: "Design match" },
      { value: "1wk", label: "Timeline" },
    ],
    outcomes: [
      "Pixel-perfect layout",
      "Smooth mobile nav",
      "Responsive across all breakpoints",
    ],
    learnings: [
      {
        title: "CSS-only animations",
        desc: "Transform and transition are enough for most simple UI animations — no JS library needed.",
      },
    ],
  },

  2: {
    title: "Snap | Make Remote Work",
    subtitle:
      "A responsive SaaS landing page with animated dropdown navigation and mobile menu.",
    client: "Frontend Mentor Challenge",
    role: "Frontend Developer",
    duration: "1 Week",
    year: "2023",
    heroBg: "#1B1B2F",
    accentColor: "#A78BFA",
    accentDark: false,
    liveUrl: "https://intro-section-app-001.netlify.app/#",
    tags: ["HTML", "CSS", "JavaScript", "Responsive"],
    overview:
      "A SaaS product intro page for 'Snap' — featuring multi-level dropdown navigation, a mobile hamburger menu, and a clean two-column hero layout.",
    goals: [
      "Build accessible dropdown navigation",
      "Responsive mobile menu with overlay",
      "Clean product-style hero section",
    ],
    problemStatement:
      "Build a SaaS landing page with complex multi-level dropdown navigation.",
    problemDetail:
      "The challenge required building accessible, animated dropdown menus that work on both desktop hover and mobile tap — without a framework.",
    challenges: [
      {
        title: "Multi-level dropdown nav",
        desc: "Toggling dropdown panels open/closed with keyboard and click support.",
      },
      {
        title: "Mobile overlay menu",
        desc: "A full-height side-drawer nav with a dimmed background overlay.",
      },
    ],
    roleDescription: "Sole developer on a Frontend Mentor challenge build.",
    responsibilities: [
      "Dropdown nav logic",
      "Mobile drawer nav",
      "Hero layout",
      "Accessibility",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "Deployment", tools: "Netlify" },
    ],
    features: [
      {
        title: "Dropdown navigation",
        desc: "Animated dropdown menus with arrow icon rotation and smooth height transitions.",
        tech: ["CSS transitions", "JS toggle"],
      },
      {
        title: "Mobile side drawer",
        desc: "Full-height mobile nav drawer with background overlay and close button.",
        tech: ["Vanilla JS", "CSS"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Accessible dropdown menus",
        detail: "Dropdowns needed to work for both click and keyboard users.",
        solution:
          "Used aria-expanded attributes and JS event listeners to toggle visibility and animate arrow icons.",
      },
    ],
    resultsContext:
      "Completed as a Frontend Mentor challenge with full design fidelity.",
    metrics: [
      { value: "100%", label: "Design match" },
      { value: "1wk", label: "Timeline" },
    ],
    outcomes: [
      "Accessible dropdown nav",
      "Responsive mobile drawer",
      "Clean hero layout",
    ],
    learnings: [
      {
        title: "Accessibility matters",
        desc: "Using aria-expanded and keyboard events makes nav components usable for everyone.",
      },
    ],
  },

  3: {
    title: "FizzAura Luxury | Fashion",
    subtitle:
      "A dynamic fashion e-commerce platform with product pages, cart, and checkout flow.",
    client: "FizzAura Brand",
    role: "Frontend Developer",
    duration: "3 Weeks",
    year: "2025",
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
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "Deployment", tools: "Vercel" },
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

  4: {
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
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
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

  5: {
    title: "Fitin Fashion Brand",
    subtitle:
      "An in-progress fashion brand site with lookbook, product showcase, and brand storytelling.",
    client: "Fitin Brand",
    role: "Frontend Developer",
    duration: "Ongoing",
    year: "2026",
    heroBg: "#0F0F0F",
    accentColor: "#E2E8F0",
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
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
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

  6: {
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
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
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

  7: {
    title: "Loopstudios",
    subtitle:
      "A creative agency landing page with full-bleed imagery, animated nav, and VR showcase grid.",
    client: "Frontend Mentor Challenge",
    role: "Frontend Developer",
    duration: "1 Week",
    year: "2023",
    heroBg: "#111",
    accentColor: "#fff",
    accentDark: true,
    liveUrl: "https://prodigy-task-01.vercel.app/",
    tags: ["Static", "Creative", "Agency", "HTML/CSS"],
    overview:
      "A Frontend Mentor challenge build — a creative VR agency homepage with full-bleed imagery, a custom hamburger nav, and a hover-effect image grid.",
    goals: [
      "Full-bleed hero with overlay text",
      "Hover effects on the creation grid",
      "Custom mobile navigation",
    ],
    problemStatement:
      "Build a visually striking agency homepage with complex image hover effects.",
    problemDetail:
      "Loopstudios required precise CSS overlay techniques and a polished hover interaction on the creation grid.",
    challenges: [
      {
        title: "Image hover overlays",
        desc: "Each creation card needed a gradient overlay and text reveal on hover.",
      },
      {
        title: "Hamburger nav",
        desc: "A custom mobile nav with logo repositioning.",
      },
    ],
    roleDescription: "Sole developer on a Frontend Mentor challenge.",
    responsibilities: [
      "Hero layout",
      "Creation grid with hover effects",
      "Mobile navigation",
      "Typography",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Creation grid with hover overlays",
        desc: "CSS gradient overlays reveal on hover with text sliding in — no JS required.",
        tech: ["CSS transitions", "Flexbox"],
      },
      {
        title: "Custom hamburger nav",
        desc: "Mobile nav with animated hamburger icon and logo layout shift.",
        tech: ["CSS", "JS toggle"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "CSS-only hover overlays",
        detail:
          "Each card needed a gradient overlay that fades in on hover with text.",
        solution:
          "Used position: absolute overlays with opacity: 0 and CSS :hover to transition them in.",
      },
    ],
    resultsContext:
      "Completed as a Frontend Mentor challenge with high design fidelity.",
    metrics: [
      { value: "100%", label: "Design match" },
      { value: "1wk", label: "Timeline" },
    ],
    outcomes: [
      "Pixel-perfect challenge completion",
      "Smooth hover interactions",
      "Responsive layout",
    ],
    learnings: [
      {
        title: "CSS :hover is powerful",
        desc: "Complex hover interactions — overlays, text reveals, colour shifts — don't need JavaScript.",
      },
    ],
  },

  8: {
    title: "Lagos Dessert Shop",
    subtitle:
      "A dynamic dessert e-commerce app with cart management, item quantity controls, and order confirmation.",
    client: "Frontend Mentor Challenge",
    role: "Frontend Developer",
    duration: "1 Week",
    year: "2024",
    heroBg: "#1A0A00",
    accentColor: "#FB923C",
    accentDark: true,
    liveUrl: "https://product-food-list.vercel.app/",
    tags: ["Dynamic", "E-commerce", "JavaScript"],
    overview:
      "A Frontend Mentor challenge — a dessert product listing page with a live cart, quantity controls, and an order confirmation modal.",
    goals: [
      "Live cart with add/remove/quantity",
      "Order confirmation modal",
      "Responsive product grid",
    ],
    problemStatement:
      "Build a fully interactive dessert shop cart experience with zero framework.",
    problemDetail:
      "This challenge required real cart state — add, remove, increment, decrement, total calculation, and a confirmation modal — in vanilla JS.",
    challenges: [
      {
        title: "Cart state management",
        desc: "Tracking quantities, totals, and item state across the UI in vanilla JS.",
      },
      {
        title: "Order confirmation modal",
        desc: "A modal showing the full cart summary on order confirmation.",
      },
    ],
    roleDescription: "Sole developer on a Frontend Mentor challenge.",
    responsibilities: [
      "Product grid",
      "Cart logic",
      "Quantity controls",
      "Modal UI",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Live cart with quantity controls",
        desc: "Add to cart, increment/decrement quantities, remove items — all with live total calculation.",
        tech: ["Vanilla JS", "DOM manipulation"],
      },
      {
        title: "Order confirmation modal",
        desc: "Modal overlay showing full cart summary with a 'Start New Order' reset flow.",
        tech: ["JS", "CSS modal"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Live cart totals without React",
        detail:
          "Cart totals needed to update instantly on every quantity change.",
        solution:
          "Built a cart state object in JS that re-renders the cart panel and recalculates totals on every mutation.",
      },
    ],
    resultsContext: "Completed as a Frontend Mentor challenge.",
    metrics: [
      { value: "100%", label: "Design match" },
      { value: "1wk", label: "Timeline" },
    ],
    outcomes: [
      "Fully interactive cart",
      "Order confirmation flow",
      "Mobile-responsive grid",
    ],
    learnings: [
      {
        title: "Vanilla JS state is enough",
        desc: "A simple JS object as a state store + a render function handles most cart logic cleanly.",
      },
    ],
  },

  9: {
    title: "Weather App",
    subtitle:
      "A dynamic weather application using the OpenWeather API with location search and live conditions.",
    client: "Personal Project",
    role: "Frontend Developer",
    duration: "1 Week",
    year: "2024",
    heroBg: "#0C1A2E",
    accentColor: "#38BDF8",
    accentDark: true,
    liveUrl: "https://prodigy-task-05.vercel.app/",
    tags: ["Dynamic", "API", "JavaScript", "Web App"],
    overview:
      "A live weather app that fetches real-time weather data from the OpenWeather API based on user location search — displaying temperature, conditions, humidity, and wind speed.",
    goals: [
      "Live weather data from OpenWeather API",
      "Location search with error handling",
      "Clean, readable weather UI",
    ],
    problemStatement:
      "Build a real-time weather app with a live API and a clear, readable UI.",
    problemDetail:
      "The challenge was handling async API calls, error states, and dynamic UI updates — all without a framework.",
    challenges: [
      {
        title: "Async API error handling",
        desc: "Gracefully handling invalid locations and network errors.",
      },
      {
        title: "Dynamic UI updates",
        desc: "Re-rendering weather data instantly on each search without page reload.",
      },
    ],
    roleDescription: "Sole developer — personal project.",
    responsibilities: [
      "API integration",
      "Search UI",
      "Weather data display",
      "Error handling",
    ],
    techStack: [
      { category: "Markup", tools: "HTML5" },
      { category: "Styling", tools: "CSS3" },
      { category: "Logic", tools: "Vanilla JavaScript" },
      { category: "API", tools: "OpenWeather API" },
      { category: "Deployment", tools: "Vercel" },
    ],
    features: [
      {
        title: "Live weather data",
        desc: "Fetches real-time temperature, humidity, wind speed, and conditions from OpenWeather API.",
        tech: ["Fetch API", "OpenWeather"],
      },
      {
        title: "Location search",
        desc: "Search any city worldwide with error feedback for invalid locations.",
        tech: ["JS", "DOM updates"],
      },
    ],
    challengeSolutions: [
      {
        challenge: "Handling API errors gracefully",
        detail:
          "Invalid cities returned error responses that needed user-friendly messaging.",
        solution:
          "Wrapped fetch in try/catch and checked response.ok before rendering — showing a clear error message on failure.",
      },
    ],
    resultsContext: "Live and functional as a personal project.",
    metrics: [
      { value: "Live", label: "Status" },
      { value: "API", label: "OpenWeather" },
      { value: "1wk", label: "Timeline" },
    ],
    outcomes: [
      "Live weather data for any city",
      "Error handling for bad searches",
      "Clean responsive UI",
    ],
    learnings: [
      {
        title: "API error handling",
        desc: "Always check response.ok and handle network errors — real APIs fail in ways you don't expect.",
      },
    ],
  },

  10: {
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
      "Scoped across three phases over three months with a ₦500,000 contract. Phase 1 covered the public-facing site and assessment flows. Phase 2 covers Supabase integration and the LMS. Phase 3 covers the admin dashboard and Paystack.",
    goals: [
      "Build a premium personal brand site positioning Daniel alongside Tony Robbins and BetterUp",
      "Create a multi-type leadership assessment engine with instant results and programme recommendations",
      "Build a full LMS with programme pages, subscription pricing, and curriculum display",
      "Create a blog/media library handling articles, YouTube video embeds, and photo galleries",
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
      "AI chat widget via Anthropic API",
      "Deployment to Vercel",
    ],
    techStack: [
      { category: "Framework", tools: "Next.js 15 (App Router)" },
      { category: "Styling", tools: "Tailwind CSS" },
      { category: "Animation", tools: "Framer Motion" },
      { category: "Backend / DB", tools: "Supabase (Phase 2)" },
      { category: "Payments", tools: "Paystack (Phase 2)" },
      { category: "AI", tools: "Anthropic Claude API" },
      { category: "Fonts", tools: "Playfair Display + Inter" },
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
        title: "3-Step Register + Multi-Step Auth",
        desc: "Split-screen auth pages with animated step transitions across Personal Info → Contact → Security.",
        tech: ["Multi-step form state", "AnimatePresence"],
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
      "AI chat widget integrated and functioning with Anthropic Claude API",
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
