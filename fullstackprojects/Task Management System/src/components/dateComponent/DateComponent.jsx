// import React, { useEffect, useState } from "react";

// const DateComponent = () => {
//   const dates = [
//     { month: "May", day: 25, weekday: "Sun" },
//     { month: "May", day: 26, weekday: "Mon" },
//     { month: "May", day: 27, weekday: "Tue" },
//     { month: "May", day: 28, weekday: "Wed" },
//     { month: "May", day: 29, weekday: "Thu" },
//     { month: "May", day: 30, weekday: "Fri" },
//     { month: "May", day: 31, weekday: "Sat" },
//     { month: "June", day: 1, weekday: "Sun" },
//     { month: "June", day: 2, weekday: "Mon" },
//     { month: "June", day: 3, weekday: "Tue" },
//   ];

//   //   ${
//   //     index === Math.floor(10 / 2)
//   //       ? "bg-indigo-600 text-white"
//   //       : "bg-white text-black"
//   //   }

//   return (
//     <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-200">
//       <div className="flex gap-2 py-2">
//         {dates.map((date, index) => (
//           <div
//             key={index}
//             className={`border rounded-2xl min-w-[70px] flex flex-col items-center shadow px-1 py-2 font-bold `}
//           >
//             <p className="text-xs">{date.month}</p>
//             <p className="text-xl">{date.day}</p>
//             <p className="text-xs">{date.weekday}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DateComponent;"use client";

import React, { useRef, useEffect, useState } from "react";
import clsx from "clsx";

const cn = clsx;

export default function InfiniteCalendar() {
  const scrollRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(new Date()); // The selected date
  const [visibleDates, setVisibleDates] = useState([]);

  // Function to generate a range of dates
  const generateDates = (centerDate, range = 30) => {
    const dates = [];
    const start = new Date(centerDate);

    for (let i = -range; i <= range; i++) {
      const date = new Date(start);
      date.setDate(date.getDate() + i);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const weekday = date.toLocaleString("default", { weekday: "short" });
      dates.push({ day, month, weekday, id: i });
    }

    return dates;
  };

  useEffect(() => {
    // Initialize visible dates centered around the selected date
    const initialDates = generateDates(selectedDate);
    setVisibleDates(initialDates);

    // Scroll to the center position programmatically
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth / 5; // Assuming 5 items visible
      const centerPosition =
        (initialDates.length / 2) * itemWidth -
        scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollLeft = centerPosition;
    }
  }, [selectedDate]);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.offsetWidth / 5; // Assuming 5 items visible
      const newCenterIndex = Math.floor(scrollLeft / itemWidth);

      if (newCenterIndex !== visibleDates.length / 2) {
        const centerDate = visibleDates[newCenterIndex]?.date || selectedDate;
        const updatedDates = generateDates(new Date(centerDate));
        setVisibleDates(updatedDates);
      }
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(new Date(date));
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        ref={scrollRef}
        className="flex items-center gap-4 max-w-4xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        {visibleDates.map((date, index) => (
          <div
            key={date.id}
            className="shrink-0 snap-center"
            onClick={() => handleDateSelect(date)}
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center w-24 h-32 rounded-2xl shadow font-bold transition-all duration-300 cursor-pointer",
                date.day === selectedDate.getDate() &&
                  date.month ===
                    selectedDate.toLocaleString("default", { month: "short" })
                  ? "bg-purple-600 text-white transform scale-110 z-10"
                  : "bg-gray-200 text-black"
              )}
            >
              <p className="text-xs">{date.weekday}</p>
              <p className="text-xl">{date.day}</p>
              <p className="text-xs">{date.month}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
