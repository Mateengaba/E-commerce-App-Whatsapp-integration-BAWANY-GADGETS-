import React, { useEffect } from "react";
import DownDisplayStyles from "./DownDisplay.module.css";
import phoneHeader from "../assets/head-img-phone.png";
import AOS from "aos";
import "aos/dist/aos.css";


const DownDisplay = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);
    
      return (
        <>
          <header className={DownDisplayStyles.header}>
            <div className={DownDisplayStyles.headerLeft} data-aos="fade-right">
              <h1>
                <span>We’ll Repair Your </span>
                <span>iPhone, iPad Or Galaxy Wherever & </span>
                <span>Whenever You Want.</span>
              </h1>
            </div>
            <div className={DownDisplayStyles.headerRight} data-aos="zoom-out-left">
              <img src={phoneHeader} alt="phone" />
            </div>
          </header>
    
        </>
      );
}

export default DownDisplay;
