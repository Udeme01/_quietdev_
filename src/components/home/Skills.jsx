// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import { skillCategories } from "../../data/skills";
// import Sectionheader from "../common/Sectionheader";

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredCategories =
//     activeCategory === "all"
//       ? skillCategories
//       : skillCategories.filter((cat) => cat.id === activeCategory);

//   return (
//     <div className="min-h-screen px-4 py-10 pt-20 lg:container mx-auto">
//       <div>
//         {/* Header */}
//         <Sectionheader
//           headerBrief="A comprehensive overview of technical proficiencies, design
//             capabilities, and professional tools acquired through continuous
//             learning and practical application."
//           headerSubtitle="Expertise"
//           headerTitle="Skills & Technologies"
//         />

//         {/* Category Filter */}
//         <div className="flex flex-wrap gap-3 mb-16 pb-12 border-b border-neutral-200">
//           <button
//             onClick={() => setActiveCategory("all")}
//             className={`px-6 py-3 font-medium transition-all ${
//               activeCategory === "all"
//                 ? "bg-neutral-900 text-white"
//                 : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
//             }`}
//           >
//             All Skills
//           </button>
//           {skillCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`px-6 py-3 font-medium transition-all flex items-center gap-2 ${
//                 activeCategory === category.id
//                   ? "bg-neutral-900 text-white"
//                   : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
//               }`}
//             >
//               <FontAwesomeIcon icon={category.icon} className="text-sm" />
//               <span>{category.title}</span>
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="space-y-16">
//           {filteredCategories.map((category, categoryIndex) => (
//             <div key={category.id} className="group">
//               {/* Category Header */}
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center">
//                   <FontAwesomeIcon
//                     icon={category.icon}
//                     className="text-white text-lg"
//                   />
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-neutral-900">
//                     {category.title}
//                   </h2>
//                   <p className="text-sm text-neutral-500">
//                     {category.skills.length}{" "}
//                     {category.skills.length === 1 ? "skill" : "skills"}
//                   </p>
//                 </div>
//               </div>

//               {/* Skills List */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {category.skills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="border-b border-neutral-200 pb-6 group/skill hover:border-neutral-900 transition-colors"
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-base font-medium text-neutral-900">
//                         {skill.name}
//                       </span>
//                       <span className="text-sm font-semibold text-neutral-600">
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="h-1.5 bg-neutral-100 overflow-hidden">
//                       <div
//                         className="h-full bg-neutral-900 transition-all duration-1000 ease-out"
//                         style={{
//                           width: `${skill.level}%`,
//                           transitionDelay: `${index * 50}ms`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Summary Stats */}
//         <div className="mt-20 pt-16 border-t border-neutral-200">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center md:text-left">
//               <div className="text-4xl font-bold text-neutral-900 mb-2">
//                 {skillCategories.reduce(
//                   (acc, cat) => acc + cat.skills.length,
//                   0,
//                 )}
//               </div>
//               <div className="text-sm text-neutral-600 uppercase tracking-wider">
//                 Total Skills
//               </div>
//             </div>
//             <div className="text-center md:text-left">
//               <div className="text-4xl font-bold text-neutral-900 mb-2">
//                 {skillCategories.length}
//               </div>
//               <div className="text-sm text-neutral-600 uppercase tracking-wider">
//                 Categories
//               </div>
//             </div>
//             <div className="text-center md:text-left">
//               <div className="text-4xl font-bold text-neutral-900 mb-2">5+</div>
//               <div className="text-sm text-neutral-600 uppercase tracking-wider">
//                 Years Experience
//               </div>
//             </div>
//             <div className="text-center md:text-left">
//               <div className="text-4xl font-bold text-neutral-900 mb-2">
//                 50+
//               </div>
//               <div className="text-sm text-neutral-600 uppercase tracking-wider">
//                 Projects Completed
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 pt-16 border-t border-neutral-200">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//             <div>
//               <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
//                 Let's Work Together
//               </h3>
//               <p className="text-neutral-600">
//                 Interested in collaborating? Get in touch to discuss your
//                 project.
//               </p>
//             </div>
//             <button className="px-8 py-4 bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors flex items-center gap-3 whitespace-nowrap group">
//               <span>View My Work</span>
//               <FontAwesomeIcon
//                 icon={faChevronRight}
//                 className="text-sm group-hover:translate-x-1 transition-transform"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
