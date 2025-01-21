import React from "react";

const SortButton = () => {
  const buttonStyles =
    "bg-[#EDE8FF] text-[#5F33E1] px-[15px] py-1 rounded-full mx-2";

  return (
    <div className="lg:w-3/4  w-[95%] mx-auto overflow-auto">
      <div className="whitespace-nowrap">
        <button className={buttonStyles}>All</button>
        <button className={buttonStyles}>To do</button>
        <button className={buttonStyles}>In progress</button>
        <button className={buttonStyles}>Done</button>
      </div>
    </div>
  );
};

export default SortButton;
