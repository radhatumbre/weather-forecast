import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-l rounded-xl mt-10  text-white py-1">
      <div className="container mx-auto flex justify-center gap-1 items-center">
        <p className="text-center font-thin text-xs">
          &copy; {new Date().getFullYear()} Chayan Barman 
        </p>
        
        <div className="flex space-x-1">
          <a
            href="https://github.com/Chayan9991"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="font-sm"/>
          </a>
          <a
            href="https://www.linkedin.com/in/chayan-barman-680ba61a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="font-sm" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
