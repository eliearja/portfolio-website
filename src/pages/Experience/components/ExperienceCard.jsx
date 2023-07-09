import PropTypes from "prop-types";
import "./ExperienceCard.css";

function ExperienceCard({ id, title, location, time, description }) {
  return (
    <div className="MainExperienceCard" key={id}>
      <div className="JobHeader">
        <div className="TitleLocation">
          <h1 className="JobTitle">{title}</h1>
          <h3 className="JobLocation">{location}</h3>
        </div>
        <div className="Time">
          <h3 className="TimeRange">{time}</h3>
        </div>
      </div>
      <div className="JobBody">
        <h1 className="JobDescription">Description</h1>
        <ul className="JobTaskList">
          {description.map((desc, index) => (
            <li key={`${id} - ${index}`}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

ExperienceCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceCard;
