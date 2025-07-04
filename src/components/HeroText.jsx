import React from "react";
import { FlipWords } from "./FlipWords";
const HeroText = () => {
  return (
    <div
      className="z-10 text-center md:text-left px-6 sm:px-8 md:px-12 mt-20 md:mt-40"
      style={{ zIndex: 10 }}
    >
      {/* {Desktop view} */}
      <div className="flex-col md:flex max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl tracking-wide font-bold text-neutral-200 mb-4">
          Discover Top tier Movies
        </h2>
        <div className="mt-4 text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed">
          From trending to hidden gems
          <br />
          <span className="inline-block mt-2">
            <FlipWords
              words={["Action", "Drama", "Comedy", "Thriller"]}
              className="text-blue-600"
            />
          </span>
          <span className="ml-2">all in one place.</span>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
