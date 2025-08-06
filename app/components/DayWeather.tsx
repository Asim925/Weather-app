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

  return (
    <div className="col-span-3 h-fit overflow-auto border-2 backdrop-blur-sm bg-black/20 border-white/50 shadow-xl/30 rounded-xl p-6">
      <h2 className="flex gap-2 items-center text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
        <IoTimeOutline /> Next 72 Hours
      </h2>

      {/* selections */}
      <div className="flex pb-4 gap-10 overflow-auto px-5 max-md:gap-3 justify-start snap-x snap-mandatory">
        {/* today */}

        <button
          onClick={() => setSelectedTab(0)}
          className="grow max-w-60 mt-1"
        >
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 0 && <p className="absolute -top-1 -left-1">⚪</p>}

            <p className="font-bold  max-md:text-sm">Today</p>
            <p className="max-md:text-sm">{weather[0].date}</p>
            <p className="max-md:text-sm">
              {weather[0].avgtempC}ºC / {weather[0].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
        {/* tomorrow */}
        <button
          onClick={() => setSelectedTab(1)}
          className="grow max-w-60 mt-1"
        >
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 1 && <p className="absolute -top-1 -left-1">⚪</p>}
            <p className="font-bold max-md:text-sm">Tomorrow</p>
            <p className="max-md:text-sm">{weather[1].date}</p>
            <p className="max-md:text-sm">
              {weather[1].avgtempC}ºC / {weather[1].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
        {/* day after tomorrow */}

        <button
          onClick={() => setSelectedTab(2)}
          className="grow max-w-60 mt-1"
        >
          <SpotlightCard
            className="text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 2 && <p className="absolute -top-1 -left-1">⚪</p>}

            <p className="font-bold max-md:text-sm">Overmorrow</p>
            <p className="max-md:text-sm">{weather[2].date}</p>
            <p className="max-md:text-sm">
              {weather[2].avgtempC}ºC / {weather[2].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
      </div>
      {/* selections - end */}
    </div>
  );
};

export default DayWeather;
