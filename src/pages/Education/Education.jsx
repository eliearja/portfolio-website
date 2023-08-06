import { useState } from "react";
import { CoursesGeneralInfo } from "../../data/Data";
import "./Education.css";
import GradeCountChart from "./components/GradeCountChart";
import TermGradeChart from "./components/TermGradeChart";
import GradePanel from "./components/GradePanel/GradePanel";

function Education() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="Education" id="education">
      {isPanelOpen && <GradePanel closePanel={setIsPanelOpen} />}
      <h1 className="EducationTitle">Education</h1>
      <div className="EducationHolder">
        <div className="EducationInfo">
          <div className="GeneralInfo">
            <ul>
              {CoursesGeneralInfo.map((point, index) => (
                <li key={index}>
                  <h2>{point.description}</h2>
                </li>
              ))}
            </ul>
          </div>
          <div className="GPAHolder">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <h1>CGPA: 9.28</h1>
              <h4>/10</h4>
            </div>
          </div>
        </div>
        <div className="EducationCharts">
          <div className="ChartsHolder">
            <GradeCountChart />
            <TermGradeChart />
          </div>
          <button
            className="MoreInfoButton"
            onClick={() => {
              setIsPanelOpen(true);
            }}
          >
            View Individual Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Education;
