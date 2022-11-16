import React from "react";
import { Link } from "react-router-dom";
import {MdReadMore} from 'react-icons/md'
import Footer from "../../home/footer/Footer";
import Header from "../../home/header/Header";
import CardImga from '../../../assets/images/Frame-151-4.png'
import CardImgb from '../../../assets/images/Frame-151-5.png'
import CardImgc from '../../../assets/images/Frame-151-6.png'
import CardImgd from '../../../assets/images/Frame-151-7.png'
import CardImge from '../../../assets/images/Frame-151.png'
import CardImgf from '../../../assets/images/Frame-151-1.png'
import CardImgg from '../../../assets/images/Frame-151-2.png'
import CardImgh from '../../../assets/images/Frame-151-3.png'
import CardImgi from '../../../assets/images/Frame-151-8.png'
import CardImgj from '../../../assets/images/Frame-151-9.png'
import CardImgk from '../../../assets/images/Frame-151-10.png'
import CardImgl from '../../../assets/images/Frame-151-11.png'
import CardImgm from '../../../assets/images/Frame-151-12.png'
import CardImgn from '../../../assets/images/Frame-151-13.png'
import CardImgo from '../../../assets/images/Frame-151-14.png'
import CardImgp from '../../../assets/images/Frame-151-15.png'
import "./community.css";
import { AiFillStar } from "react-icons/ai";

const COM_IMG = [
    {
      data: "1",
      img: CardImga,
    },
    {
      data: "2",
      img: CardImgb,
    },
    {
      data: "3",
      img: CardImgc,
    },
    {
      data: "4",
      img: CardImgd,
    },
    {
      data: "5",
      img: CardImge,
    },
    {
      data: "6",
      img: CardImgf,
    },
    {
      data: "7",
      img: CardImgg,
    },
  
    {
      data: "8",
      img: CardImgh,
    },
    {
        data: "9",
        img: CardImgi,
      },
      {
        data: "10",
        img: CardImgj,
      },
      {
        data: "11",
        img: CardImgk,
      },
      {
        data: "12",
        img: CardImgl,
      },
      {
        data: "13",
        img: CardImgm,
      },
      {
        data: "14",
        img: CardImgn,
      },
      {
        data: "15",
        img: CardImgo,
      },
      {
        data: "16",
        img: CardImgp,
      },
    
    
  ];

const Community = () => {
  return (
    <section id="community">
      <Header />
      <div className="community container">
        <div className="comm-links">
          <Link>Resturant</Link>
          <Link>Cottage</Link>
          <Link>Castle</Link>
          <Link>Fantast city</Link>
          <Link>Beach</Link>
          <Link>Cabins</Link>
          <Link>Off-grid</Link>
          <Link>Farm</Link>
          <Link>
            Location <MdReadMore className="more"/>
          </Link>
        </div>
        <div className="comm-body">
        {COM_IMG.map((webimg) => {
            return (
              <div className="comm-cards">
                <img src={webimg.img} alt="" />
                <div className="comm-card">
                  <span>Desert King</span>
                  <span className="fbold">1MBT per night</span>
                </div>
                <div className="comm-card">
                  <span>2345km away</span>
                  <span>available for 2weeks stay</span>
                </div>
                <div className="star">
                  <AiFillStar className="card-star"/>
                  <AiFillStar className="card-star"/>
                  <AiFillStar className="card-star"/>
                  <AiFillStar className="card-star"/>
                  <AiFillStar className="card-star"/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Community;
