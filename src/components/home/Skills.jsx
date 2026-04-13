import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { skillCategories } from "../../data/skills";
import Sectionheader from "../common/Sectionheader";
import { Link } from "react-router-dom";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section className="min-h-screen px-4 py-10 pt-20 lg:container mx-auto">
      <div>
        {/* Header */}
        <Sectionheader
          headerBrief="A comprehensive overview of technical proficiencies, design
            capabilities, and professional tools acquired through continuous
            learning and practical application."
          headerSubtitle="Expertise"
          headerTitle="Skills & Technologies"
        />

        {/* Category Filter */}
        <section className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-neutral-200">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 font-medium transition-all ${
              activeCategory === "all"
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              <FontAwesomeIcon icon={category.icon} className="text-sm" />
              <span>{category.title}</span>
            </button>
          ))}
        </section>

        {/* Skills Grid */}
        <section className="space-y-16">
          {filteredCategories.map((category, categoryIndex) => (
            <section key={category.id} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={category.icon}
                    className="text-black text-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                  <p className="text-sm text-white/50">
                    {category.skills.length}{" "}
                    {category.skills.length === 1 ? "skill" : "skills"}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-fit border-b border-neutral-200 pb-3 group/skill transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>

        {/* Summary Stats */}
        <section className="mt-20 pt-16 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">
                {skillCategories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0,
                )}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                Total Skills
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">
                {skillCategories.length}
              </div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                Categories
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">
                Projects Completed
              </div>
            </div>
          </div>
        </section>

        {/* ready to embark on a project - section */}
        <section className="pt-20 flex items-center justify-center flex-col">
          <h1 className="text-3xl mb-6 md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl uppercase text-center">
            Get in touch to discuss your project.
          </h1>
          <Link className="border rounded-full px-6 py-3 flex items-center justify-center gap-3">
            <span>Book a strategy call</span>
            <FontAwesomeIcon
              icon={faPhone}
              className="bg-white text-black p-2 rounded-full"
            />
          </Link>
        </section>
      </div>
    </section>
  );
};

export default Skills;
