import React, { useState, useEffect } from "react";
import SoCalCountiesSVG from "../assets/svg/SoCalCountiesSVG";
import "./Landing.css";

const Landing = () => {
  const [kernHover, setKernHover] = useState(false);
  const [sanLuisHover, setSanLuisHover] = useState(false);
  const [sanBarHover, setSanBarHover] = useState(false); // santa barbara
  const [venHover, setVenHover] = useState(false); // Ventura
  const [losAngHover, setLosAngHover] = useState(false); // Los Angeles
  const [sanBernHover, setSanBernHover] = useState(false); // San Bernardino
  const [riverHover, setRiverHover] = useState(false); // Riverside
  const [orangeHover, setOrangeHover] = useState(false); // Orange
  const [imperialHover, setImperialHover] = useState(false); // Imperial
  const [sanDiegoHover, setSanDiegoHover] = useState(false); // San Diego

  const [indexCounter, setIndexCounter] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIndexCounter((prevState) => (prevState + 1) % 30);
    }, 2000);

    return () => clearTimeout(timer);
  }, [indexCounter]);

  return (
    <div className="landing">
      <div className="map-container">
        <SoCalCountiesSVG
          kernHover={kernHover}
          setKernHover={setKernHover}
          sanLuisHover={sanLuisHover}
          setSanLuisHover={setSanLuisHover}
          sanBarHover={sanBarHover}
          setSanBarHover={setSanBarHover}
          venHover={venHover}
          setVenHover={setVenHover}
          losAngHover={losAngHover}
          setLosAngHover={setLosAngHover}
          sanBernHover={sanBernHover}
          setSanBernHover={setSanBernHover}
          riverHover={riverHover}
          setRiverHover={setRiverHover}
          orangeHover={orangeHover}
          setOrangeHover={setOrangeHover}
          imperialHover={imperialHover}
          setImperialHover={setImperialHover}
          sanDiegoHover={sanDiegoHover}
          setSanDiegoHover={setSanDiegoHover}
          indexCounter={indexCounter}
        />
      </div>
      <p>{indexCounter}</p>
    </div>
  );
};

export default Landing;
