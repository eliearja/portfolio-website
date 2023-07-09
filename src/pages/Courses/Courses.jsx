import { CoursesTaken } from "../../data/Data";
import "./Courses.css";

function Courses() {
  return (
    <div className="Courses" id="courses">
      <h1 className="CoursesTitle">Courses</h1>
      <div className="CoursesHolder">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>GPA</th>
              <th>Letter Grade</th>
              <th>French Course</th>
            </tr>
          </thead>
          <tbody>
            {/* Mathematics and Sciences */}
            {CoursesTaken["Mathematics and Sciences"].map((course, index) => (
              <tr key={course.code}>
                {index === 0 && (
                  <td rowSpan={CoursesTaken["Mathematics and Sciences"].length}>
                    Mathematics and Sciences
                  </td>
                )}
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.gpa}</td>
                <td>{course.letter}</td>
                <td>{course.isFrench ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
