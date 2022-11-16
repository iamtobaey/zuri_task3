import React from "react";
import "./footer.css";
import FootLogo from "../../../assets/images/footerlogo.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer container">
        <div className="foot-links">
          <div className="foot-link">
            <img src={FootLogo} alt="" />
            <div className="foot-socials">
              <ImFacebook className="foot-social"/>
              <AiOutlineInstagram className="foot-social"/>
              <AiOutlineTwitter className="foot-social"/>
            </div>
          </div>
          <div className="foot-link">
            <div className="foot-head">Community</div>
            <span>NFT</span>
            <span>Tokens</span>
            <span>Landlords</span>
            <span>Discord</span>
          </div>
          <div className="foot-link">
            <div className="foot-head">Places</div>
            <span>Castles</span>
            <span>Farms</span>
            <span>Beach</span>
            <span>Learn more</span>
          </div>
          <div className="foot-link">
            <div className="foot-head">About us</div>
            <span>Road map</span>
            <span>Creators</span>
            <span>Careers</span>
            <span>Contact us</span>
          </div>
        </div>
        <span>&copy; 2022 Metabnb</span>
      </div>
    </section>
  );
};

export default Footer;
