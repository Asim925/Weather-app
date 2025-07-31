import React from "react";
import { CurrentCondition as IConditions } from "../page";
import ShowMoreDetails from "./ShowMoreDetails";

interface Props {
  current: IConditions;
}

const CurrentCondition = ({ current }: Props) => {
  return (
    <div className="xl:mx-30 lg:mx-10 border-2 border-gray-700 bg-gray-950 rounded-xl p-6 ">
      <h2 className="text-4xl font-bold mb-4">Current Conditions</h2>
      {/* details */}
      <div className="px-4 py-2">
        <div className="mb-2 flex gap-2">
          <p>🌡️ Current Temperature (ºC): {current.temp_C}ºC</p>
          <p>, Feels like (ºC): {current.FeelsLikeC}ºC</p>
        </div>
        <div className="mb-2 flex gap-2">
          <p>🌡️ Current Temperature (ºF): {current.temp_F}ºF</p>
          <p>, Feels like (ºC): {current.FeelsLikeF}ºF</p>
        </div>
        <p>
          {current.weatherDesc[0].value === "Smoke" ? (
            <span>☁️</span>
          ) : current.weatherDesc[0].value === "Sunny" ? (
            <span>☀️</span>
          ) : (
            <span>🌧️</span>
          )}{" "}
          condition: {current.weatherDesc[0].value}
        </p>
        <div className="mb-2 flex gap-2">
          <p>☁️ Cloud Cover: {current.cloudcover}% ,</p>
          <p>👁️ Visibility: {current.visibility}Km</p>
        </div>
        <div className="mb-2 flex gap-2">
          <p>💧 Humidity: {current.humidity}% ,</p>
          <p>
            💨 Wind: {current.windspeedKmph}-Km/h <strong>OR</strong>{" "}
            {current.windspeedMiles}
            -miles/h
          </p>
        </div>
      </div>
      <ShowMoreDetails />
      {/* details end */}
    </div>
  );
};

export default CurrentCondition;
