import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExternalLinkAlt,
  faCalendar,
  faUser,
  faTag,
  faCode,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Project data - Replace with your actual project details
  const project = {
    title: "Comfy House Furnitures",
    tagline: "Modern E-Commerce Platform for Premium Home Furnishings",
    category: "E-Commerce • Web Development",
    client: {
      name: "Comfy House Ltd.",
      industry: "Furniture & Home Decor",
      location: "San Francisco, CA",
    },
    timeline: {
      start: "January 2024",
      end: "March 2024",
      duration: "3 months",
    },
    role: "Lead Frontend Developer",
    team: ["Frontend Development", "UI/UX Design", "Backend Integration"],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Stripe API",
      "Tailwind CSS",
      "Express.js",
    ],
    liveUrl: "https://comfyhouse.example.com",
    githubUrl: "https://github.com/yourusername/comfyhouse",

    overview:
      "Developed a comprehensive e-commerce platform for Comfy House, a premium furniture retailer, featuring an intuitive shopping experience, advanced product filtering, and seamless checkout integration. The platform increased online sales by 156% within the first quarter of launch.",

    challenge:
      "The client needed a modern, user-friendly e-commerce solution that could handle their extensive product catalog while maintaining fast load times and providing an exceptional mobile experience. Their previous platform was outdated and resulted in high cart abandonment rates.",

    solution:
      "Architected a React-based single-page application with server-side rendering for optimal performance and SEO. Implemented lazy loading for images, created an advanced filtering system, and integrated Stripe for secure payments. The design focused on large, high-quality product imagery to showcase the furniture's premium quality.",

    features: [
      "Advanced product search and filtering with real-time results",
      "Shopping cart with persistent state across sessions",
      "Secure payment processing with Stripe integration",
      "User authentication and profile management",
      "Admin dashboard for inventory management",
      "Responsive design optimized for all devices",
      "Image zoom and 360-degree product views",
      "Customer reviews and ratings system",
    ],

    results: [
      { metric: "156%", description: "Increase in online sales" },
      { metric: "42%", description: "Lower cart abandonment rate" },
      { metric: "3.2s", description: "Average page load time" },
      { metric: "89%", description: "Mobile user satisfaction" },
    ],

    images: [
      {
        url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80",
        caption: "Homepage featuring hero section with featured collections",
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80",
        caption: "Product catalog with advanced filtering options",
      },
      {
        url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=1600&q=80",
        caption: "Product detail page with image gallery and specifications",
      },
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1600&q=80",
        caption: "Shopping cart and checkout process",
      },
      {
        url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1600&q=80",
        caption: "Mobile responsive design showcase",
      },
    ],

    testimonial: {
      quote:
        "The new platform exceeded our expectations. Not only did it improve our online presence, but it also significantly boosted our conversion rates. The team's attention to detail and understanding of our brand was exceptional.",
      author: "Sarah Johnson",
      position: "CEO, Comfy House Ltd.",
    },
  };

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-3 text-slate-900 hover:text-slate-600 transition-colors group">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span className="font-medium">Back to Projects</span>
            </button>

            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <span>View Live</span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-sm"
                  />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-slate-300 rounded hover:border-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-slate-900" />
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Category */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-slate-800"></div>
            <span className="text-slate-600 text-sm font-medium tracking-wider uppercase">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-16 leading-relaxed">
            {project.tagline}
          </p>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-y border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <FontAwesomeIcon icon={faUser} className="text-sm" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Client
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {project.client.name}
              </h3>
              <p className="text-sm text-slate-600">
                {project.client.industry}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <FontAwesomeIcon icon={faCalendar} className="text-sm" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Timeline
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {project.timeline.duration}
              </h3>
              <p className="text-sm text-slate-600">
                {project.timeline.start} - {project.timeline.end}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <FontAwesomeIcon icon={faTag} className="text-sm" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Role
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                {project.role}
              </h3>
            </div>

            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <FontAwesomeIcon icon={faCode} className="text-sm" />
                <span className="text-sm font-medium uppercase tracking-wider">
                  Status
                </span>
              </div>
              <h3 className="text-lg font-semibold text-green-600">
                Live & Active
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          {/* Featured Image */}
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl mb-6">
            <img
              src={project.images[activeImage].url}
              alt={project.images[activeImage].caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
              <p className="text-white text-sm font-medium">
                {project.images[activeImage].caption}
              </p>
            </div>
          </div>

          {/* Image Thumbnails */}
          <div className="grid grid-cols-5 gap-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-[4/3] rounded overflow-hidden transition-all duration-300 ${
                  activeImage === index
                    ? "ring-2 ring-slate-900 ring-offset-2"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Content */}
      <section className="px-6 md:px-12 lg:px-20 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Challenge */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  The Challenge
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  The Solution
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  {project.solution}
                </p>

                {/* Features List */}
                <div className="bg-slate-50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="text-green-600 mt-1 flex-shrink-0"
                        />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Results & Impact
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-slate-50 rounded-lg"
                    >
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        {result.metric}
                      </div>
                      <p className="text-sm text-slate-600">
                        {result.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-slate-900 text-white rounded-lg p-10">
                  <div className="text-6xl text-slate-700 mb-4">"</div>
                  <p className="text-xl mb-8 leading-relaxed italic">
                    {project.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold">
                        {project.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {project.testimonial.author}
                      </div>
                      <div className="text-sm text-slate-400">
                        {project.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-slate-50 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Team Scope */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Team Scope
                  </h3>
                  <ul className="space-y-3">
                    {project.team.map((role, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Client Info */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Client Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-slate-500">Company:</span>
                      <span className="ml-2 text-slate-900 font-medium">
                        {project.client.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Industry:</span>
                      <span className="ml-2 text-slate-900 font-medium">
                        {project.client.industry}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500">Location:</span>
                      <span className="ml-2 text-slate-900 font-medium">
                        {project.client.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Next/Previous Projects */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="group p-8 border border-slate-200 rounded-lg hover:border-slate-900 transition-all text-left">
              <span className="text-sm text-slate-500 uppercase tracking-wider mb-2 block">
                Previous Project
              </span>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors">
                Rooms Homepage
              </h3>
            </button>
            <button className="group p-8 border border-slate-200 rounded-lg hover:border-slate-900 transition-all text-left md:text-right">
              <span className="text-sm text-slate-500 uppercase tracking-wider mb-2 block">
                Next Project
              </span>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors">
                Snap Remote Work
              </h3>
            </button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's collaborate and bring your vision to life with exceptional
            design and development.
          </p>
          <button className="px-10 py-5 bg-white text-slate-900 font-semibold rounded hover:bg-slate-100 transition-colors text-lg">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
