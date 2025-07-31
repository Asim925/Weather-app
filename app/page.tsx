"use client";

import Hero from "./components/Hero";
import Particles from "./components/Particles";
import CurrentConditions from "./components/CurrentCondition";
import React, { useEffect, useState } from "react";

interface Data {
  current_condition: CurrentCondition[];
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

const page = () => {
  let [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://wttr.in/Karachi?format=j1");
      setData(await res.json());
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {/* background */}
      <div className="absolute top-0 left-0 -z-[99999] h-full w-screen">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      {/* background end*/}
      <Hero />
      {data && <CurrentConditions current={data.current_condition[0]} />}
    </>
  );
};

export default page;
