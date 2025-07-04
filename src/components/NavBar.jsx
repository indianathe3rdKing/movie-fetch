import React, { useState } from "react";
import Search from "./Search";
import { motion } from "motion/react";

function Navigation() {
  return (
    <div className="backdrop-blur-lg z-40">
      <ul className="list-none w-full items-center flex flex-col pt-20 text-2xl">
        <motion.li
          className="mb-4 hover-animation "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="/">Home</a>
        </motion.li>
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full md:w-[50%]" />
        <motion.li
          className="mb-4 hover-animation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a href="/">Movies</a>
        </motion.li>
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <motion.li
          className="mb-4 hover-animation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="/">TV Shows</a>
        </motion.li>
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
        <motion.li
          className="mb-4 hover-animation"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="/">Most Popular</a>
        </motion.li>
        <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      </ul>
    </div>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="fixed flex p-4 justify-between items-center bg-transparent w-full h-16 z-50">
        <h2 className="text-xl font-semibold">Movie.Fetch</h2>
        <div className="flex justify-between items-center md:justify-end  w-[50%]">
          <Search />
          <button onClick={() => setIsOpen(!isOpen)}>
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-10 h-10 cursor-pointer"
              alt="Menu"
            />
          </button>
        </div>
      </div>

      {isOpen && <Navigation />}
    </div>
  );
};

export default NavBar;
