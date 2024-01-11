import React, { useEffect } from "react";
import headerStyles from "./Header.module.css";
import phoneHeader from "../assets/M2-removebg-preview.png";
import Cards from './Cards';
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero";
import DownDisplay from "./DownDisplay";
import Feedback from "./Feedback";


const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);




  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.headerLeft} data-aos="fade-right">
          <h1>
            <span>Bawany Gadgets </span>
            <span>Lifestyle Mobile Original-Brand Accessories</span>
            <span>& Spare Parts</span>
          </h1>
        </div>
        <div className={headerStyles.headerRight} data-aos="zoom-out-left">
          <img src={phoneHeader} alt="phone" />
        </div>

       
      </header>

      <Cards />
      <DownDisplay />
    
      <Hero />
      <Feedback />




    </>
  );
};

export default Header;
