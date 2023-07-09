import PropTypes from "prop-types";
import "./SkillsCard.css";

function SkillsCard({ id, name, image, altName }) {
  return (
    <div className="MainCard" key={id}>
      <img className="SkillLogo" src={image} alt={altName} />
      <p className="SkillName">{name}</p>
    </div>
  );
}

SkillsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altName: PropTypes.string.isRequired,
};

export default SkillsCard;
