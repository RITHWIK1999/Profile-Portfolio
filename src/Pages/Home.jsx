import React from "react";
import Button from "../Components/Button";

function Home() {
  return (
    <div className="flex flex-col md:flex-row lg:gap-52 gap-4 bg-my-bluedark md:pb-28">
      <div className="lg:pl-36 pl-4 lg:pt-28 py-10 flex-1">
        <h2 className="text-white text-center md:text-left text-2xl lg:text-5xl">
          Hi, I'm
        </h2>
        <h1 className="text-white font-bold text-center md:text-left text-5xl lg:text-8xl py-4">
          RITHWIK S
        </h1>
        <p className="text-white text-center md:text-left text-lg md:text-2xl lg:text-3xl py-4">
          Software Developer From India
        </p>
        <div className="flex justify-center md:justify-start gap-4 md:py-6 py-2">
          <Button text="Learn More" />
        </div>
      </div>

      <div className="md:py-24 lg:pr-44 pr-4 flex-1">
        <img
          className="w-full rounded-lg"
          src="https://img.freepik.com/free-photo/unknown-man-posing-back-view_23-2149417562.jpg"
          alt="A person with their back turned"
        />
      </div>
    </div>
  );
}

export default Home;
