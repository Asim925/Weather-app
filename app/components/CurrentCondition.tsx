import React from "react";
import { CurrentCondition as IConditions } from "../types";
import ShowMoreDetails from "./ShowMoreDetails";

interface Props {
  current: IConditions;
}

const CurrentCondition = ({ current }: Props) => {
  return (
    <div className="col-span-3 sm:col-span-2 h-fit overflow-auto border-2 backdrop-blur-sm bg-black/20 border-white/50 shadow-xl/30 rounded-xl px-6 py-6">
      {/* details */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
            Current Conditions
          </h2>
          <div className="leading-7 xl:leading-8 space-y-2 text-sm sm:text-base">
            <p>
              Date & Time: <strong>{new Date().toLocaleString()}</strong>
            </p>
            <p>
              🌡️ Current Temperature (ºC): <strong>{current.temp_C}ºC</strong>
            </p>
            <p>
              🌡️ Current Temperature (ºF): <strong>{current.temp_F}ºF</strong>
            </p>
            <p>
              {current.weatherDesc[0].value === "Smoke" ||
              current.weatherDesc[0].value === "Haze" ? (
                <span>☁️</span>
              ) : current.weatherDesc[0].value === "Sunny" ? (
                <span>☀️</span>
              ) : (
                <span>🌧️</span>
              )}{" "}
              Condition: <strong>{current.weatherDesc[0].value}</strong>
            </p>
            <ShowMoreDetails current={current} />
          </div>
        </div>

        <div className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 flex-shrink-0 transition-transform hover:scale-105">
          {current.weatherDesc[0].value === "Smoke" ||
          current.weatherDesc[0].value === "Haze" ? (
            <img
              className="w-full h-auto object-contain"
              src="smoke.png"
              alt="Smoke"
            />
          ) : current.weatherDesc[0].value === "Sunny" ? (
            <img
              className="w-full h-auto object-contain"
              src="sun.png"
              alt="Sun"
            />
          ) : (
            <img
              className="w-full h-auto object-contain"
              src="storm.png"
              alt="Storm"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentCondition;
