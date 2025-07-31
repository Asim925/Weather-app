import React from "react";

const Loading = () => {
  return (
    <div className="text-2xl md:mt-10">
      <div className="text-gray-300 font-bold">
        Please wait the data is loading...
      </div>
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loading;
