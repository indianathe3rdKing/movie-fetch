import React from "react";

const HeroText = () => {
  return (
    <div className="z-10 text-center md:mt-40 md:text-left ">
      {/* {Desktop view} */}
      <div className="flex-col  md:flex ">
        <h2 className="text-2xl tracking-wide font-bold text-neutral-400">
          Discover Top tier Movies
        </h2>
        <p className="mt-2 text-lg text-neutral-300">
          From trending to hidden gems
          <br />
          <span></span>
          all in one place.
        </p>
      </div>
    </div>
  );
};

export default HeroText;
