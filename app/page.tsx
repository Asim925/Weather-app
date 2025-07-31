"use client";

import Hero from "./components/Hero";
import CurrentConditions from "./components/CurrentCondition";
import React, { useEffect, useState } from "react";
import Location from "./components/Location";

interface Data {
  current_condition: CurrentCondition[];
  nearest_area: NearestArea[];
}

export interface CurrentCondition {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  localObsDateTime: string;
  observation_time: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: {
    value: string;
  }[];
  weatherIconUrl: {
    value: string;
  }[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

export interface NearestArea {
  areaName: { value: string }[];
  country: { value: string }[];
  latitude: string;
  longitude: string;
  population: string;
  region: { value: string }[];
  weatherUrl: { value: string }[];
}

const page = () => {
  let [data, setData] = useState<Data | null>(null);
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let res = await fetch("https://wttr.in/Karachi?format=j1");
      setData(await res.json());
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {/* main */}
      <Hero isLoading={isLoading} />

      {/* details */}
      {data && (
        <div className="grid grid-cols-3 xl:mx-30 md:mx-10 gap-5 mb-10">
          <CurrentConditions current={data.current_condition[0]} />
          <Location area={data.nearest_area[0]} />
        </div>
      )}
    </>
  );
};

export default page;
