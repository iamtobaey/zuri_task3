import { React, useState } from "react";
import "./navbar.css";
import LOGO from "../../../assets/images/Group.png";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const connectHandler = () => {
    setModalIsOpen(true);
  };
  return (
    <section id="navbar" className="container">
      {modalIsOpen && <Modal />}
      <div className="navbar">
        <div className="logo">
          <img src={LOGO} alt="" />
        </div>
        <ul className="navlinks">
          <Link to='/'>
            <li className="navlink">Home</li>
          </Link>
          <Link>
            <li className="navlink">Place to stay</li>
          </Link>

          <Link>
            <li className="navlink">NFTs</li>
          </Link>

          <Link to="/community">
            <li className="navlink">Community</li>
          </Link>
        </ul>
        <button className="nav-btn" onClick={connectHandler}>
          Connect wallet
        </button>
      </div>
    </section>
  );
};

export default Navbar;
