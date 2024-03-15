import { SKILLS } from "../../data";
// import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <>
      <h1 className="text-3xl text-left font-regular m-4">Experienced With</h1>
      <section className="grid grid-rows-5 grid-cols-2 gap-8 p-4">
        {SKILLS.map(({ id, link, title }) => {
          return (
            <img
              key={id}
              className="mx-auto border border-white shadow-xl"
              src={link}
              alt={title}
            />
          );
        })}
      </section>
    </>
  );
};

export default Skills;
