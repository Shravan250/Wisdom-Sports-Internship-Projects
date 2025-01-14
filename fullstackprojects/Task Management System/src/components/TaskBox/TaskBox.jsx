import React from "react";
import { Clock, Delete, Edit } from "../../assets";

const TaskBox = () => {
  const containerStyles =
    "flex flex-row mx-auto my-3 justify-between lg:w-1/2  w-[95%] p-3 border-[0.5px] border-slate-300 rounded-md shadow-lg bg-white ";

  return (
    <>
      <div className={containerStyles}>
        <div className="flex flex-col justify-between items-start">
          <div className="text-md mb-1">Testing Taskbar</div>
          <div className="text-sm text-gray-400 mb-1">Task desc in short</div>
          <div className="flex items-center gap-1 flex-row">
            <img className="w-4 h-4" src={Clock} alt="clock-icon" />
            <span className="text-sm text-[#ab94ff]">12:30 PM</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-row float-end gap-1 items-center">
            <img
              className="h-6 w-6 bg-[#d6f3ff] p-[5px] rounded-[4px]"
              src={Edit}
              alt="edit-icon"
            />
            <img
              className="h-6 w-6 bg-[#ffc3c3] p-[4px] rounded-[4px]"
              src={Delete}
              alt="delete-icon"
            />
          </div>
          <div className="bg-[#FFE9E1] px-[10px] rounded-full text-[#FF7E53]">
            In progress
          </div>
        </div>
      </div>

      <div className={containerStyles}>
        <div className="flex flex-col justify-between items-start">
          <div className="text-md mb-1">Testing Taskbar</div>
          <div className="text-sm text-gray-400 mb-1">Task desc in short</div>
          <div className="flex items-center gap-1 flex-row">
            <img className="w-4 h-4" src={Clock} alt="clock-icon" />
            <span className="text-sm text-[#ab94ff]">12:30 PM</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-row float-end gap-1 items-center">
            <img
              className="h-6 w-6 bg-[#d6f3ff] p-[5px] rounded-[4px]"
              src={Edit}
              alt="edit-icon"
            />
            <img
              className="h-6 w-6 bg-[#ffc3c3] p-[4px] rounded-[4px]"
              src={Delete}
              alt="delete-icon"
            />
          </div>
          <div className="bg-[#EDE8FF] px-[10px] rounded-full text-[#683EE3]">
            Done
          </div>
        </div>
      </div>

      <div className={containerStyles}>
        <div className="flex flex-col justify-between items-start">
          <div className="text-md mb-1">Testing Taskbar</div>
          <div className="text-sm text-gray-400 mb-1">Task desc in short</div>
          <div className="flex items-center gap-1 flex-row">
            <img className="w-4 h-4" src={Clock} alt="clock-icon" />
            <span className="text-sm text-[#ab94ff]">12:30 PM</span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex flex-row float-end gap-1 items-center">
            <img
              className="h-6 w-6 bg-[#d6f3ff] p-[5px] rounded-[4px]"
              src={Edit}
              alt="edit-icon"
            />
            <img
              className="h-6 w-6 bg-[#ffc3c3] p-[4px] rounded-[4px]"
              src={Delete}
              alt="delete-icon"
            />
          </div>
          <div className="bg-[#E3F2FF] px-[10px] rounded-full text-[#0087FF]">
            To do
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskBox;
