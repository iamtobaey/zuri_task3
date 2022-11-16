import React from "react";
import Img0 from "../../../../assets/images/Group-4028.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="intro container">
        <div className="intro-left">
          <div className="intro-head">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </div>
          <div className="intro-text">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </div>
          <div className="intro-search">
            <input type="text" placeholder="search for location" />
            <button>Search</button>
          </div>
        </div>
        <div className="intro-right">
          <img src={Img0} alt="" />
          {/* <div className="intro-down"></div>
          <div className="intro-up"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
