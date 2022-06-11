import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>azmihabib0323@gmail.com</span>
        <div className="f-icons">
          <a href=""><Insta color="white" size={"3rem"} /></a>
          <a href="facebook.com/azmisatt" target='_blank'><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/azmi0323" target='_blank'><Github color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
