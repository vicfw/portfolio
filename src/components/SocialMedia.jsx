import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div style={{ cursor: "pointer" }}>
        <a href="https://github.com/vicfw/" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div style={{ cursor: "pointer" }}>
        <a
          href="https://www.linkedin.com/in/farid-bigham-80354822b/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      {/* 
     <div style={{cursor:"pointer"}} >
        <a href="https://www.instagram.com/farid_bq" target="_blank" rel="noreferrer">
        <BsInstagram   />
        </a>
      </div>
    */}
    </div>
  );
};

export default SocialMedia;
