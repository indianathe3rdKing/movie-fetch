import React from "react";
import { FlipWords } from "./FlipWords";
const HeroText = () => {
  return (
    <div className="z-10 text-center md:mt-40 md:text-left ">
      {/* {Desktop view} */}
      <div className="flex-col  md:flex ">
        <h2 className="text-2xl tracking-wide font-bold text-neutral-400">
          Discover Top tier Movies
        </h2>
        <div className="mt-2 text-lg text-neutral-300">
          From trending to hidden gems
          <br />
          <span>
            <FlipWords words={["Action", "Drama", "Comedy", "Thriller"]} />
          </span>
          all in one place.
        </div>
      </div>
    </div>
  );
};

export default HeroText;
