import React from "react";
import logo from "../../../src/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data/socials";
import { ROUTES } from "../../data/routes";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-900 text-white mt-24 font-lato">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white hover:border-neutral-400 transition-colors"
                  src={logo}
                  alt="Udeme Emmanuel Logo"
                />
              </Link>
              <h3 className="text-2xl font-bold mb-4">Udeme Emmanuel</h3>
              <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
                Full-stack developer crafting elegant digital experiences with
                modern technologies and thoughtful design.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {SOCIALS.map((social) => {
                  const { id, href, target, icon, rel } = social;
                  return (
                    <a
                      key={id}
                      href={href}
                      target={target}
                      rel={rel}
                      className="w-10 h-10 flex items-center justify-center bg-neutral-800 hover:bg-white hover:text-neutral-900 transition-all duration-300 rounded"
                      aria-label={`Visit ${href}`}
                    >
                      <FontAwesomeIcon icon={icon} className="text-base" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Navigation
              </h4>
              <ul className="space-y-3">
                {ROUTES.map((route) => {
                  const { id, title, href } = route;
                  return (
                    <li key={id}>
                      <Link
                        to={href}
                        className="text-neutral-400 hover:text-white transition-colors inline-block"
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <a
                    href="mailto:udeme@example.com"
                    className="hover:text-white transition-colors"
                  >
                    emmanueludeme.fe@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2347046780531"
                    className="hover:text-white transition-colors"
                  >
                    +(234)-704-678-0531
                  </a>
                </li>
                <li className="text-neutral-400">Lagos, Nigeria</li>
              </ul>
            </div>

            {/* Newsletter/CTA */}
            <div className="lg:col-span-2">
              <button
                onClick={scrollToTop}
                className="w-12 h-12 flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-200 transition-all duration-300 rounded ml-auto"
                aria-label="Back to top"
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>
              © {new Date().getFullYear()} Udeme Emmanuel. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
