import React from "react";
import HeroText from "./HeroText";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="flex z-10 pt-20  items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden ">
      <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <Camera scale={0.3} position={[0, 0, 0]} />
        </Canvas>
      </figure>
    </div>
  );
};

export default Hero;
