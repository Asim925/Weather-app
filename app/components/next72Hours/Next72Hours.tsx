"use client";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Weather as WeatherData } from "../../types";
import SpotlightCard from "./components/SpotlightCard";
import HourlyForecast from "./components/HourlyForecast";
import Astronomy from "./components/Astronomy";

interface Props {
  weather: WeatherData[];
}

const Next72Hours = ({ weather }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

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
            className="text-left text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 0 && (
              <p className="text-xs sm:text-md absolute top-1 right-1 sm:right-3 md:top-9 sm:top-6 md:right-8 lg:right-10">
                🟡
              </p>
            )}

            <p className="text-sm">Today</p>
            <p className="font-bold max-md:text-sm">
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
            className="text-left text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 1 && (
              <p className="text-xs sm:text-md absolute top-1 right-1 sm:right-3 md:top-9 sm:top-6 md:right-8 lg:right-10">
                🟡
              </p>
            )}
            <p className=" text-sm ">Tomorrow</p>
            <p className="font-bold max-md:text-sm">
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
            className="text-left text-nowrap custom-spotlight-card"
            spotlightColor="rgba(212, 212, 212, 0.2)"
          >
            {selectedTab == 2 && (
              <p className="text-xs sm:text-md absolute top-1 right-1 sm:right-3 md:top-9 sm:top-6 md:right-8 lg:right-10">
                🟡
              </p>
            )}

            <p className="text-sm">Overmorrow</p>
            <p className="font-bold  max-md:text-sm">
              {weather[2].avgtempC}ºC / {weather[2].avgtempF}ºF
            </p>
          </SpotlightCard>
        </button>
      </div>
      {/* selections - end */}

      {/* hourly forcast */}
      <h2 className="text-3xl mt-5 font-bold sm:px-6">
        {selectedTab == 0
          ? "Today"
          : selectedTab == 1
          ? "Tomorrow"
          : "Overmorrow"}
      </h2>
      <HourlyForecast hourlyData={weather[selectedTab].hourly} />

      {/* astronomy */}
      <Astronomy astronomy={weather[selectedTab].astronomy} />
    </div>
  );
};

export default Next72Hours;
