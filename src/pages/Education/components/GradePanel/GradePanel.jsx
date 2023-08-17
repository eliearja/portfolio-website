import PropTypes from "prop-types";
import "./GradePanel.css";

function GradePanel({ closePanel }) {
  return (
    <div className="GradePanelWrapper">
      <div className="GradePanel">
        <div className="GradePanelBody">
          <p>To be filled soon...</p>
        </div>
        <div className="GradePanelFooter">
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
    </div>
  );
}

GradePanel.propTypes = {
  closePanel: PropTypes.func.isRequired,
};

export default GradePanel;
