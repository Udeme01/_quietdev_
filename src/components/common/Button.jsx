import { SOCIALS } from "../../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const btnStyle =
  "border rounded-full px-6 py-3 inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-white/90 transition-colors cursor-pointer";

export const Button = ({ children }) => {
  return (
    <button type="button" className={btnStyle}>
      {children}
    </button>
  );
};

export const AnchorButton = ({ children, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`${btnStyle}`}>
      {children}
    </a>
  );
};

export const SocialButton = ({ className }) => {
  return (
    <section className={className}>
      <div className="mt-7 flex items-center gap-3">
        {SOCIALS.map((socials) => {
          const { id, href, target, icon, rel } = socials;
          return (
            <a
              key={id}
              href={href}
              target={target}
              rel={rel}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          );
        })}
      </div>
    </section>
  );
};
