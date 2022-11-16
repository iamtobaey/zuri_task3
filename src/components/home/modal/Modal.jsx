import React from "react";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import MetaImg from "../../../assets/images/meta.png";
import WalletConnect from "../../../assets/images/walletconnect.png";

const Modal = () => {
  return (
    <section id="modal" className="modal-container">
     
      <div className="modal">
        <div className="modal-head">
          <span>Connect Wallet</span>
          <AiOutlineClose />
        </div>
        <hr />
        <div className="modal-body">
          <p>Choose your preferred wallet:</p>
          <div className="modal-wallet">
            <div>
              <img src={MetaImg} alt="" /> MetaMask
            </div>
            <BsChevronRight />
          </div>
          <div className="modal-wallet">
            <div>
              <img src={WalletConnect} alt="" /> WalletConnect
            </div>
            <BsChevronRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
