import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full py-8 text-white px-3">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-3xl sm:text 2xl text-xl font-bold py-2">
            Never want to miss any of my updates?
          </h1>
          <p>Sign up for my newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 px-2 sm:mr-2 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] w-[120px] rounded-md font-medium my-3 py-2 ml-0 mx-auto text-black">
              Notify me
            </button>
          </div>
          <p>
            By the way, i care about the protection of your data. Please read the{" "}
            <span className="text-[#00df9a]">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
