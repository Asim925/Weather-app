import React from "react";
import { NearestArea as IArea } from "../page";
interface Props {
  area: IArea;
}

const Location = ({ area }: Props) => {
  return (
    <div className="col-span-1 h-70 overflow-auto border-2 backdrop-blur-md bg-white/5  border-white/10 rounded-xl p-6 ">
      <h2 className="text-4xl font-bold mb-4">Location</h2>
      <div className="mt-5 xl:leading-8 leading-7">
        <p>
          🗺️ Country: <strong>{area.country[0].value}</strong>
        </p>
        <p>
          🏞️ Province: <strong>{area.region[0].value}</strong>
        </p>
        <p>
          🏙️ City: <strong>{area.areaName[0].value}</strong>
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
