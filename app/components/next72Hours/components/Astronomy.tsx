import { Astronomy as IAstronomy } from "@/app/types";
import React from "react";

interface Props {
  astronomy: IAstronomy[];
}

const Astronomy = ({ astronomy }: Props) => {
  return (
    <>
      <h3 className="text-xl font-bold pt-5 pl-10">Astronomy</h3>
      <div className="mx-7 md:mx-10 lg:mx-15 xl:mx-20  mt-5 rounded-lg overflow-hidden border backdrop-blur-sm bg-black/20 border-white/30 p-5 flex max-sm:flex-col">
        <div className="sm:w-1/2 sm:border-r-1 max-sm:border-b-1 max-sm:pb-3">
          <h4 className="text-lg font-bold">Sun ☀️</h4>
          <p>Sunrise: {astronomy[0].sunrise}</p>
          <p>Sunset: {astronomy[0].sunset}</p>
        </div>

        <div className="sm:pl-2 sm:w-1/2 max-sm:pt-3">
          <h4 className=" text-lg font-bold ">Moon 🌙</h4>
          <p>Moonrise: {astronomy[0].moonrise}</p>
          <p>Moonset: {astronomy[0].moonset}</p>
          <p>Sunrise: {astronomy[0].sunrise}</p>
        </div>
      </div>
    </>
  );
};

export default Astronomy;
