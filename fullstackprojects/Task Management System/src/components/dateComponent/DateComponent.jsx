import React, { useEffect, useState } from "react";

const DateComponent = () => {
  const dates = [
    { month: "May", day: 25, weekday: "Sun" },
    { month: "May", day: 26, weekday: "Mon" },
    { month: "May", day: 27, weekday: "Tue" },
    { month: "May", day: 28, weekday: "Wed" },
    { month: "May", day: 29, weekday: "Thu" },
    { month: "May", day: 30, weekday: "Fri" },
    { month: "May", day: 31, weekday: "Sat" },
    { month: "June", day: 1, weekday: "Sun" },
    { month: "June", day: 2, weekday: "Mon" },
    { month: "June", day: 3, weekday: "Tue" },
  ];

  //   ${
  //     index === Math.floor(10 / 2)
  //       ? "bg-indigo-600 text-white"
  //       : "bg-white text-black"
  //   }

  return (
    <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200">
      <div className="flex gap-2 py-2">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`border rounded-2xl min-w-[70px] flex flex-col items-center shadow px-1 py-2 font-bold `}
          >
            <p className="text-xs">{date.month}</p>
            <p className="text-xl">{date.day}</p>
            <p className="text-xs">{date.weekday}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateComponent;
