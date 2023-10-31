import React from "react";
import Typewriter from "typewriter-effect";

const Midtext = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1">WHO AM I?</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-1">Stay and find out</h1>
        <div className="flex justify-center">
          <p className="md:text-2xl sm:text-xl text-l font-bold">I like to</p>
          <p className="md:text-2xl sm:text-xl text-l font-bold pl-1 text-gray-500">
            <Typewriter
              options={{
                strings: ["game", "workout", "socialize", "swim"],
                autoStart: true,
                loop: true,
                pauseFor: 500,
              }}
            />
          </p>
        </div>
        <p className="md:text-xl text-l font-bold text-gray-500">
          This is my first time trying React and TailWind CSS, so don't judge
        </p>
        <button className="bg-[#00df9a] w-[130px] rounded-md font-medium my-3 py-2 mx-auto text-black">
          Click me
        </button>
      </div>
    </div>
  );
};

export default Midtext;
