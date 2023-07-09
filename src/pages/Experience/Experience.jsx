import "./Experience.css";
import ExperienceCard from "./components/ExperienceCard";
import { JobExperiences } from "../../data/Data";

function Experience() {
  return (
    <div className="Experience" id="experience">
      <h1 className="ExperienceTitle">Experience</h1>
      <div className="ExperienceCardHolder">
        {JobExperiences.map((job, index) => (
          <ExperienceCard
            key={index}
            id={index}
            title={job.title}
            location={job.location}
            time={job.time}
            description={job.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
