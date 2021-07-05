import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-menu">
                <li className="footer-item">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/david-cordova-146b09174/">LinkedIn</a>
                </li>
                <li className="footer-item">
                    <i className="fab fa-github"></i>
                    <a href="https://www.github.com/daveryde">GitHub</a>
                </li>
            </ul>
            <div className="footer-copyright">
                <p>
                    Copyright &copy; 2020
          <a href="mailto:david_cordova@stu.centralaz.edu">David Cordova</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;