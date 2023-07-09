import { SkillsFillers } from "../../data/Data";
import "./Skills.css";
import SkillsCard from "./components/SkillsCard";

function Skills() {
  // Duplicate the array to create a longer list of skills
  const extendedSkills = [...SkillsFillers, ...SkillsFillers];

  return (
    <div className="Skills" id="skills">
      <h1 className="SkillsTitle">Skills</h1>
      <div className="SkillsBlock">
        <div className="SkillsHolder">
          {extendedSkills.map((skill, index) => (
            <SkillsCard
              key={index}
              id={index}
              name={skill.name}
              image={skill.logo}
              altName={skill.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
