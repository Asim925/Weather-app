import React from "react";
import Loading from "./Loading";

interface Props {
  isLoading: boolean;
}

const Hero = ({ isLoading }: Props) => {
  return (
    <>
      <div className="md:flex gap-5 min-h-screen w-vw items-center max-md:text-center">
        <div className="md:w-[50%] xl:pl-30 lg:pl-25 md:pl-20 max-md:px-10 mt-10">
          <h1 className="text-6xl xl:text-8xl font-extrabold mb-8">
            Weather <br /> App
          </h1>
          <p className="tracking-wide lg:leading-8 xl:text-xl lg:text-lg text-md">
            ☀️ Welcome to my Weather App — a fast ⚡, minimal 🧊, and powerful
            🌪️ tool for checking real-time weather conditions. Built using the
            wttr.in API 🛰️, this app lets you fetch up-to-date weather data 🌍
            for any city with ease. Whether it's the temperature 🌡️, humidity
            💧, wind speed 🌬️, or forecasts 📅 — everything is just a click
            away. With a clean UI 🎨 and the reliability of wttr.in, you can
            plan your day smarter 🧠 and stay one step ahead of the weather ⛅.
          </p>
          {isLoading && <Loading />}
        </div>

        <div className="md:w-[50%] xl:pr-30 max-md:px-30 max-sm:px-10">
          <img className="w-full" src="hero-image.png" alt="yele" />
        </div>
      </div>
    </>
  );
};

export default Hero;
