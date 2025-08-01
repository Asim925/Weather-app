"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const DayWeather = () => {
  let [selectedTab, setSelectedTab] = useState(0);
  let tabs = ["Today", "Tomorrow", "Day after Tomorrow"];

  return (
    <div className="col-span-3 h-fit overflow-auto border-2 backdrop-blur-sm bg-black/20 border-white/50 shadow-xl/30 rounded-xl px-6 py-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center sm:text-left">
        Select Day
      </h2>
      <TabGroup className={"flex flex-col items-center "}>
        <TabList
          className={"flex grow w-full md:w-[60%] py-1 rounded-4xl bg-gray-500"}
        >
          {tabs.map((tab, index) => (
            <Tab
              onClick={() => setSelectedTab(index)}
              className={`grow focus:border-0 ${
                selectedTab === index
                  ? "bg-white text-black rounded-4xl mx-1 py-3"
                  : ""
              }`}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>Content 1</TabPanel>
          <TabPanel>Content 2</TabPanel>
          <TabPanel>Content 3</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default DayWeather;
