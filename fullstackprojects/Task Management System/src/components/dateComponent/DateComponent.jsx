import React from "react";

const DateComponent = () => {
  return (
    <div className="flex flex-row space-between w-[60px] h-[80px]">
      <div className="border-2  rounded-md flex flex-col space-around item-center font-bold p-2">
        <p className="text-sm">May</p>
        <p className="">24</p>
        <p className="text-sm">Sat</p>
      </div>
      {/* <div className="border-2  rounded-md flex flex-col space-around item-center font-bold">
        <p className="text-sm">May</p>
        <p className="">25</p>
        <p className="text-sm">Sun</p>
      </div>
      <div className="border-2  rounded-md flex flex-col space-around item-center font-bold">
        <p className="text-sm">May</p>
        <p className="">26</p>
        <p className="text-sm">Mon</p>
      </div> */}
    </div>
  );
};

export default DateComponent;
