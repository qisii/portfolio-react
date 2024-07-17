import React from "react";
import "./about.css";
import AboutImg from "../../assets/about_img.png";
import CV from "../../assets/Quisie-resume.pdf";
// import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">Get to Know Me</span>

      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          {/* <Info /> */}

          <p className="about_desc">
            Hi there! I'm Quisie Caporte, a graduate of Bachelor of Science in
            Information Technology, majoring in Database Systems. Throughout my
            studies, I have gained experience working in both frontend and
            backend development. I am confident in my self-study abilities and
            enjoy collaborating with teams. I am excited to bring my skills and
            enthusiasm to new opportunities and projects, and I look forward to
            the chance to work together!
          </p>

          <a download="" href={CV} className="button button-flex">
            Download CV
            <i class="ri-arrow-down-circle-line button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
