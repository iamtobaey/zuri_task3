import React from "react";
import "./nft.css";
import NftImg from "../../../../assets/images/Frame-59546.png";

const NFT = () => {
  return (
    <section id="nft">
      <div className="nft container">
        <div className="nft-left">
          <h1>Metabnb NFTs</h1>
          <p>
            Discover our NFT gift cards collection. Loyal customer gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customers
            access to load our exclusive services.
          </p>
          <button className="nft-btn">Learn More</button>
        </div>
        <div className="nft-right">
          <img src={NftImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default NFT;
