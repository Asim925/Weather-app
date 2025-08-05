"use client";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Weather as WeatherData } from "../types";
import SpotlightCard from "./SpotlightCard";

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
      <div className="flex gap-10 m-8 ">
        {/* today */}

        <button
          onClick={() => setSelectedTab(0)}
          className="grow max-w-60 min-w-10"
        >
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            <p className="font-bold">Today</p>
            <p>{weather[0].date}</p>
            <p>
              {weather[0].avgtempC}ºC / {weather[0].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
        {/* tomorrow */}
        <button onClick={() => setSelectedTab(0)} className="grow max-w-60">
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            <p className="font-bold">Tomorrow</p>
            <p>{weather[1].date}</p>
            <p>
              {weather[1].avgtempC}ºC / {weather[1].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
        {/* day after tomorrow */}

        <button onClick={() => setSelectedTab(0)} className="grow max-w-60">
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            <p className="font-bold">Overmorrow</p>
            <p>{weather[2].date}</p>
            <p>
              {weather[2].avgtempC}ºC / {weather[2].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
      </div>
    </div>
  );
};

export default DayWeather;
