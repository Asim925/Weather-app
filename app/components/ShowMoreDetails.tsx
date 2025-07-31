"use client";
import React, { useState } from "react";
import { CurrentCondition as IConditions } from "../page";
interface Props {
  current: IConditions;
}

const ShowMoreDetails = ({ current }: Props) => {
  let [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="mt-5 relative inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-gray-600 to-gray-400 group-hover:from-gray-600 group-hover:to-gray-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          {show ? "Hide Details" : "Show More Details"}
        </span>
      </button>
      {show && (
        <div className="my-5">
          <p>
            🌡️ Feels like (ºC): <strong>{current.FeelsLikeC}ºC</strong>
          </p>
          <p>
            🌡️ Feels like (ºC): <strong>{current.FeelsLikeF}ºF</strong>
          </p>
          <p>
            ☁️ Cloud Cover: <strong>{current.cloudcover}% </strong>
          </p>
          <p>
            👁️ Visibility: <strong>{current.visibility}Km</strong>
          </p>
          <p>
            💧 Humidity: <strong>{current.humidity}% </strong>
          </p>
          <p>
            💨 Wind:{" "}
            <strong>
              {current.windspeedKmph}-Km/h OR {current.windspeedMiles}
              -miles/h
            </strong>
          </p>
        </div>
      )}
    </>
  );
};

export default ShowMoreDetails;
