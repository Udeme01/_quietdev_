import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExternalLinkAlt,
  faAward,
  faGraduationCap,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Sectionheader from "../common/Sectionheader";
import { certifications } from "../../data/certifications";
import { Link } from "react-router-dom";

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <section className="bg-white dark:bg-transparent lg:container px-4 pt-24 mx-auto">
      <div>
        {/* Header Section */}
        <Sectionheader
          headerTitle="Certifications"
          headerSubtitle="Professional Development"
          headerBrief="Ongoing commitment to professional development through
        industry-recognized certifications and specialized training programs."
        />

        {/* Certifications Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-0">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-white border border-slate-200 rounded-lg hover:border-slate-800 transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative p-8">
                {/* Provider and Year */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    {/* Provider Logo */}
                    <div className="w-12 h-12 rounded flex items-center justify-center mb-4">
                      <img
                        src={cert.image}
                        alt="certification provider logo"
                        className="text-white font-bold text-lg"
                      />
                    </div>

                    {/* Provider Name */}
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {cert.provider}
                      </h3>
                      {cert.verified && (
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="text-green-600 text-xs"
                        />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      {cert.category}
                    </span>
                  </div>

                  {/* Year */}
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded">
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Title */}
                <h4 className="text-lg font-semibold text-slate-900 mb-6 leading-snug min-h-14">
                  {cert.title}
                </h4>

                {/* View Certificate Link */}
                <a
                  target="_blank"
                  href={cert.link}
                  className="flex items-center gap-2 text-sm font-medium text-slate-900 cursor-pointer"
                >
                  <span>View Certificate</span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-xs"
                  />
                </a>
              </div>

              {/* Left border accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
            </div>
          ))}
        </section>

        {/* Stats Section */}
        <section className="border-t border-white/20 pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              {
                icon: faGraduationCap,
                number: "7+",
                label: "Certifications Earned",
              },
              { icon: faAward, number: "2+", label: "Learning Platforms" },
              { icon: faChartLine, number: "500+", label: "Hours of Training" },
              {
                icon: faCheckCircle,
                number: "100%",
                label: "Verified Credentials",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-black/90 rounded mb-4">
                  <FontAwesomeIcon
                    icon={stat.icon}
                    className="text-white text-lg"
                  />
                </div>
                <div className="text-3xl font-bold text-black/90 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-black/60 dark:text-white font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-black/90 dark:text-white tracking-wide mb-2">
                View Complete Credential Portfolio
              </h3>
              <p className="text-black/60 dark:text-white tracking-wide">
                Access detailed information about all certifications and
                credentials
              </p>
            </div>
            <Link className="px-8 py-4 bg-black/90 dark:bg-white text-white dark:text-black font-semibold rounded hover:bg-black/80 dark:hover:text-white transition-colors duration-300 flex items-center gap-3 whitespace-nowrap">
              <span>View All Credentials</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
