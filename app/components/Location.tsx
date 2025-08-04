import React from "react";
import { NearestArea as IArea } from "../types";

interface Props {
  area: IArea;
}

const Location = ({ area }: Props) => {
  return (
    <div className="col-span-3 sm:col-span-1 h-fit overflow-auto border-2 backdrop-blur-md bg-black/20 border-white/50 shadow-xl/30 rounded-xl p-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
        Location
      </h2>
      <div className="leading-7 xl:leading-8 text-sm sm:text-base space-y-2">
        <p>
          🗺️ Country: <strong>{area.country[0].value}</strong>
        </p>

        <p>
          🏙️ City:{" "}
          <strong>
            {area.areaName[0].value}, {area.region[0].value}
          </strong>
        </p>
        <p>
          📍 Latitude: <strong>{area.latitude}</strong>
        </p>
        <p>
          📍 Longitude: <strong>{area.longitude}</strong>
        </p>
        <p>
          👥 Population: <strong>{area.population}</strong>
        </p>
      </div>
    </div>
  );
};

export default Location;
