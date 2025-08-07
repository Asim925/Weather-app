import { Hourly as IHourly } from "@/app/types";
import React from "react";

interface Props {
  hourlyData: IHourly[];
}

export const getWeatherEmoji = (desc: string) => {
  const lower = desc.toLowerCase();

  if (lower.includes("sun")) return "☀️";
  if (lower.includes("clear")) return "🌕";
  if (lower.includes("cloud")) return "☁️";
  if (lower.includes("rain")) return "🌧️";
  if (lower.includes("thunder")) return "⛈️";
  if (lower.includes("snow")) return "❄️";
  if (lower.includes("fog") || lower.includes("haze")) return "🌫️";
  if (lower.includes("mist")) return "🌁";

  return "🌡️"; // Default
};

const HourlyForecast = ({ hourlyData }: Props) => {
  return (
    <>
      <h3 className="text-xl font-bold py-4 pl-10">Hourly Forecast</h3>
      <div className="mx-7 md:mx-10 lg:mx-15 xl:mx-20 flex rounded-lg overflow-hidden border backdrop-blur-sm bg-black/20 border-white/30 flex-wrap justify-around py-2">
        {hourlyData.map((hour, index) => {
          return (
            <div
              key={index}
              className="min-w-30 p-4 flex items-center justify-center flex-col"
            >
              <p>
                {hour.tempC}º/ {hour.FeelsLikeC}º
              </p>
              <p className="text-3xl">
                {getWeatherEmoji(hour.weatherDesc[0].value)}
              </p>
              <p>
                {index * 3 < 12
                  ? (index * 3 == 0 ? 12 : index * 3) + " AM"
                  : ((index * 3) % 12 == 0 ? 12 : (index * 3) % 12) + " PM"}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HourlyForecast;
