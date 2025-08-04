"use client";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Weather as WeatherData } from "../types";

interface Props {
  weather: WeatherData[];
}

const DayWeather = ({ weather }: Props) => {
  let [selectedTab, setSelectedTab] = useState(0);

  console.log(weather);
  return (
    <div className="col-span-3 h-fit overflow-auto border-2 backdrop-blur-sm bg-black/20 border-white/50 shadow-xl/30 rounded-xl px-6 py-6">
      <h2 className="flex gap-2 items-center text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
        <IoTimeOutline /> Next 72 Hours
      </h2>
      <div
        onClick={() => setSelectedTab(1)}
        className="w-40 h-25 border-2 backdrop-blur-sm bg-black/20 border-white/50 shadow-xl/30 rounded-xl p-2"
      >
        Today
      </div>
    </div>
  );
};

export default DayWeather;
