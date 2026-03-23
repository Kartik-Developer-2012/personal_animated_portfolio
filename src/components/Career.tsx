import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer [Intern]</h4>
                <h5>Lift and Loop Technologies</h5>
              </div>
              <h3>06/2025</h3>
            </div>
            <p>
              Successfully completed a 2-month internship as a web developer
              focusing on React.js. Contributed to real-world projects and
              developed responsive user interfaces and backend integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Flutter Developer</h4>
                <h5>Lift and Loop Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Transitioned into a full-time role as a Flutter developer.
              Responsible for the end-to-end development of mobile applications,
              including the QuickXPos suite and various other productivity and
              utility apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
