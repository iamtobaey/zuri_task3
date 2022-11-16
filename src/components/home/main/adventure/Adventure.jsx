import React from "react";
import "./adventure.css";
import CardImg1 from "../../../../assets/images/Frame-151.png";
import CardImg2 from "../../../../assets/images/Frame-151-1.png";
import CardImg3 from "../../../../assets/images/Frame-151-2.png";
import CardImg4 from "../../../../assets/images/Frame-151-3.png";
import CardImg5 from "../../../../assets/images/Frame-151-4.png";
import CardImg6 from "../../../../assets/images/Frame-151-5.png";
import CardImg7 from "../../../../assets/images/Frame-151-6.png";
import CardImg8 from "../../../../assets/images/Frame-151-7.png";
import { AiFillStar } from "react-icons/ai";

const GO_IMG = [
  {
    data: "1",
    img: CardImg1,
  },
  {
    data: "2",
    img: CardImg2,
  },
  {
    data: "3",
    img: CardImg3,
  },
  {
    data: "4",
    img: CardImg4,
  },
  {
    data: "5",
    img: CardImg5,
  },
  {
    data: "6",
    img: CardImg6,
  },
  {
    data: "7",
    img: CardImg7,
  },

  {
    data: "8",
    img: CardImg8,
  },
];

const Adventure = () => {
  return (
    <section id="adventure">
      <div className="adventure container">
        <h1>Inspiration for your next adventure</h1>
        <div className="adventure-cards">
          {GO_IMG.map((webimg) => {
            return (
              <div className="adventure-card">
                <img src={webimg.img} alt="" />
                <div className="card-content">
                  <span>Desert King</span>
                  <span className="fbold">1MBT per night</span>
                </div>
                <div className="card-content">
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
    </section>
  );
};

export default Adventure;
