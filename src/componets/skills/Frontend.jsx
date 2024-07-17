import React from "react";
import "./skills.css";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="ri-html5-line"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i class="ri-css3-line"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i class="ri-javascript-line"></i>

            <div>
              <h3 className="skills_name">JavaScript</h3>
              <span className="skills_level"></span>
            </div>
          </div>

          <div className="skills_data">
            <i class="ri-bootstrap-line"></i>

            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i class="ri-tailwind-css-line"></i>

            <div>
              <h3 className="skills_name">Tailwind CSS</h3>
              {/* <span className="skills_level"></span> */}
            </div>
          </div>

          <div className="skills_data">
            <i class="ri-github-line"></i>

            <div>
              <h3 className="skills_name">Git</h3>
              {/* <span className="skills_level"></span> */}
            </div>
          </div>

          <div className="skills_data">
            <i class="ri-reactjs-line"></i>

            <div>
              <h3 className="skills_name">React</h3>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
