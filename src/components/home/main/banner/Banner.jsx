import React from "react";
import "./banner.css";
import Mbtoken from "../../../../assets/images/mb-token.svg";
import Metamask from "../../../../assets/images/metamask.svg";
import Opensea from "../../../../assets/images/opensea.svg";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner container">
        <div>
          <img src={Mbtoken} alt="" />
          <img src={Metamask} alt="" />
          <img src={Opensea} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
