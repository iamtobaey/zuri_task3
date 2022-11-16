import React from "react";
import Adventure from "./adventure/Adventure";
import Banner from "./banner/Banner";
import Intro from "./intro/Intro";
import "./main.css";
import NFT from "./nft/NFT";

const Main = () => {
  return (
    <section id="main">
      <Intro />
      <Banner />
      <Adventure />
      <NFT />
    </section>
  );
};

export default Main;
