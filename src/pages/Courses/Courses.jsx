import { CoursesGeneralInfo } from "../../data/Data";
import "./Courses.css";
import GradeCountChart from "./components/GradeCountChart";
import TermGradeChart from "./components/TermGradeChart";

function Courses() {
  return (
    <div className="Courses" id="courses">
      <h1 className="CoursesTitle">Courses</h1>
      <div className="CoursesHolder">
        <div className="CoursesInfo">
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
              <h1>GPA: 9.28</h1>
              <h4>/10</h4>
            </div>
          </div>
        </div>
        <div className="CoursesCharts">
          <div className="ChartsHolder">
            <GradeCountChart />
            <TermGradeChart />
          </div>
          <button className="MoreInfoButton">View All Courses</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
