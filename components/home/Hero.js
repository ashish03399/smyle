import React from "react";

export default function Hero() {
  return (
    <div className={'bg-red-100'}>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Join Us In Our Mission To Educate Every Child in India!<br/>
            <span className="text-xl sm:text-2xl text-gray-400">{" "}SPONSOR THIS ENTIRE PROJECT{" "}</span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            No amount is too small. Every penny received can help us change a life!
          </p>
        </div>
      </div>
    </div>
  );
}
