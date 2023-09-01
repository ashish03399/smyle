import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 my-4">
        Goals of NGO <br />
        ☛ Helping the needy children in education<br />
        ☛ Organizing the Annual Medical Camp<br />
        ☛ Water service for passers-by<br />
        ☛ Organizing Shyam Baba's Vigilance on Ekadashi<br />
        ☛ Annual Shyam Mahotsav<br />
        ☛ Monthly Khatu Shyam ji Bus Tour<br />
      </p>
    </div>
  );
}
