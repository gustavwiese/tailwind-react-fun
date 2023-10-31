import React from "react";

const Midtext = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-1">SOME TEXT GOES HERE</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold md:py-1">H1 text goes here</h1>
        <div>
          <p className="md:text-2xl sm:text-xl text-l font-bold">Moving text goes here</p>
        </div>
      </div>
    </div>
  );
};

export default Midtext;
