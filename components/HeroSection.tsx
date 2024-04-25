"use client";

import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      const date = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full",
      }).format(now);

      setCurrentTime(time);
      setCurrentDate(date);
    };

    const intervalId = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-cyan-1">
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
          <p className="text-lg font-medium text-sky-l lg:text-2xl">
            {currentDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
