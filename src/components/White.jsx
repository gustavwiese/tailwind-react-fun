import React from "react";
import MeLifeguard from "../assets/migLivredder.jpg";

export default function White() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4 rounded-[100px]"
          src={MeLifeguard}
          alt="FlowershirtPic"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">RANDOM PICTURE OF ME</p>
          <h1 className="md:text-2xl sm:text-xl text-l font-bold py-1">"On duty"</h1>
          <p>
            This is me during the summer of 2022. I have worked as a surf lifeguard the last two
            summer breaks now. I think it's a really awesome way to spend the summer and travel
            around Denmark to places you wouldn't normally go.
          </p>
          <button className="bg-black text-[#00df9a] w-[155px] rounded-md font-medium my-3 py-2 mx-auto md:mx-0">
            What else do i do?
          </button>
        </div>
      </div>
    </div>
  );
}
