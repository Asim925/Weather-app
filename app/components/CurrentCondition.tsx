import React from "react";
import { CurrentCondition as IConditions } from "../page";
import ShowMoreDetails from "./ShowMoreDetails";

interface Props {
  current: IConditions;
}

const CurrentCondition = ({ current }: Props) => {
  return (
    <div className="col-span-2 h-70 overflow-auto border-2 backdrop-blur-md bg-white/5  border-white/10 rounded-xl px-6 pt-6 ">
      {/* details */}
      <div className="flex md:flex-row flex-col lg:justify-between">
        <div>
          <h2 className="text-4xl font-bold mb-4">Current Conditions</h2>
          <div className="lg:pl-4 leading-7 xl:leading-8">
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
        <div className="hover:scale-107 transition xl:w-75 h-fit lg:w-60 min-w-40 max-lg:mt-5">
          {current.weatherDesc[0].value === "Smoke" ||
          current.weatherDesc[0].value === "Haze" ? (
            <img
              className="-mt-10 w-full h-full"
              src="smoke.png"
              alt="storm image"
            />
          ) : current.weatherDesc[0].value === "Sunny" ? (
            <img
              className="-mt-10 w-full h-full"
              src="sun.png"
              alt="storm image"
            />
          ) : (
            <img
              className="-mt-10 w-full h-full"
              src="storm.png"
              alt="storm image"
            />
          )}{" "}
        </div>
      </div>
      {/* details end */}
    </div>
  );
};

export default CurrentCondition;
