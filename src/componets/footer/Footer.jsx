import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Quisie</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <p className="footer_social_link">quisiecaporte@gmail.com</p>
        </div>

        <span className="footer_copy">
          &#169; Quisie M. Caporte. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
