import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./home.css";
import Main from "./main/Main";

const Home = () => {
  return (
    <section id="home">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default Home;
