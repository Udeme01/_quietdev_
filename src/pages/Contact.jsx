import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SendMe } from "../components/common/SendMe";

const socials = [
  {
    id: 1,
    label: "LinkedIn",
    description:
      "See my work history, recommendations, and professional background.",
    href: "https://www.linkedin.com/in/emmanuel-udeme/",
    icon: faLinkedin,
  },
  {
    id: 2,
    label: "GitHub",
    description:
      "Browse my repositories, open source work, and commit history.",
    href: "https://github.com/Udeme01",
    icon: faGithub,
  },
  {
    id: 3,
    label: "Instagram",
    description: "Follow the journey — behind the scenes of dev and design.",
    href: "https://www.instagram.com/the_quietdev",
    icon: faInstagram,
  },
  {
    id: 4,
    label: "Email",
    description: "Prefer to write directly? My inbox is always open.",
    href: "mailto:emmanueludeme.fe@gmail.com",
    icon: faEnvelope,
  },
];

const Contact = () => {
  return (
    <main className="bg-transparent py-20 px-6 md:px-12 lg:px-24">
      <section className="lg:container mx-auto">
        {/* ── HERO ── */}
        <div className="mb-16 sm:mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/25 font-semibold mb-4 block">
            Let's Chat
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase leading-[0.92] text-white mb-6 font-bebas">
            Got a project
            <br />
            <span className="text-white/25">in mind?</span>
            <br />
            Let's build it.
          </h1>
          <p
            className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Whether you're a startup finding your footing online or an
            established brand looking for a refresh — I'm ready to help. Tell me
            about your project and let's make something worth showing off.
          </p>
        </div>

        {/* ── SEND ME / CONTACT FORM ── */}
        <div className="rounded-2xl bg-white/3 border border-white/[0.07] p-7 sm:p-10 mb-12">
          <SendMe />
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/20 text-[11px] uppercase tracking-[0.25em] font-semibold">
            Or find me here
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* ── SOCIAL CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 p-5 rounded-2xl bg-white/3 border border-white/[0.07] hover:bg-white/[0.07] hover:border-white/1.5 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="shrink-0 w-11 h-11 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/15 transition-all duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <FontAwesomeIcon icon={s.icon} className="text-lg" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold mb-0.5">
                  {s.label}
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  {s.description}
                </p>
              </div>

              {/* Arrow */}
              <svg
                className="w-4 h-4 text-white/20 group-hover:text-white/50 shrink-0 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Contact;
