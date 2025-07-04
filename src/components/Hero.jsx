import React from "react";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div className="flex z-10 pt-20  items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden ">
      <HeroText />
    </div>
  );
};

export default Hero;
