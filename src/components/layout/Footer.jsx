import React from "react";
import logo from "../../../src/img/logo.png";
import { Link } from "react-router-dom";
import { SOCIALS } from "../../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ScrollTopArrow from "../common/ScrollTopArrow";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white mt-24 font-lato md:py-16 mx-4 text-center">
      <section className="lg:container mx-auto px-6 md:px-12 lg:px-20 bg-black rounded-3xl">
        {/* available */}
        <section className="pt-12">
          <div>
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <Link to="/" className="inline-block mb-2">
                <img
                  className="w-12 h-12 rounded-full border-2 border-white hover:border-neutral-400 transition-colors"
                  src={logo}
                  alt="Udeme Emmanuel Logo"
                />
              </Link>
              <h3 className="text-xl font-bold ">Udeme Emmanuel</h3>
              <p className="text-neutral-400 leading-relaxed text-center text-sm">
                Available to take on new projects!
              </p>
            </div>
          </div>
        </section>

        {/* ready to embark on a project - section */}
        <section className="py-32 flex items-center justify-center flex-col">
          <h1 className="text-4xl mb-6 md:text-5xl lg:text-6xl xl:text-7xl max-w-6xl uppercase">
            Ready to level up your website?
          </h1>
          <Link className="border rounded-full px-6 py-3 flex items-center justify-center gap-3">
            <span>Book a strategy call</span>
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-white text-black p-2 rounded-full"
            />
          </Link>
        </section>

        {/* Bottom Bar */}
        <section className="border-t border-neutral-800 py-8">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-2">
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

          <div className="text-sm text-neutral-500">
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
          <ScrollTopArrow />
        </section>
      </section>
    </footer>
  );
};

export default Footer;
