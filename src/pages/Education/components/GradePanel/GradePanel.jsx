import PropTypes from "prop-types";
import "./GradePanel.css";

function GradePanel({ closePanel }) {
  return (
    <div className="GradePanelWrapper">
      <div className="GradePanel">
        <h2>Grade Panel</h2>
        <p>To be filled soon...</p>
        <button
          className="CloseButton"
          onClick={() => {
            closePanel(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

GradePanel.propTypes = {
  closePanel: PropTypes.func.isRequired,
};

export default GradePanel;
