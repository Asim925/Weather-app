"use client";

import Hero from "./components/Hero";
import CurrentConditions from "./components/CurrentCondition";
import React, { useEffect, useState } from "react";
import Location from "./components/Location";
import Next72Hours from "./components/next72Hours/Next72Hours";
import { Data } from "./types";

const Page = () => {
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch("https://wttr.in/Karachi?format=j1");
      setData(await res.json());
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="select-none">
      {/* main */}
      <Hero isLoading={isLoading} />
      {/* details */}
      {data && (
        <div className="grid grid-cols-3 xl:mx-30 md:mx-10 mx-8 gap-5 mb-10 pb-10">
          <CurrentConditions current={data.current_condition[0]} />
          <Location area={data.nearest_area[0]} />
          <Next72Hours weather={data.weather} />
        </div>
      )}
    </div>
  );
};

export default Page;
