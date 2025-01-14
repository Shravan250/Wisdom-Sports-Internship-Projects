import React, { useState } from "react";
import { Clock, Delete, Edit } from "../../assets";

const TaskBox = () => {
  const containerStyles =
    "flex flex-row mx-auto my-3 justify-between  w-[95%] p-3 border-[0.5px] border-slate-300 rounded-md shadow-lg bg-white ";

  const tasks = [
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "In progress",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "Done",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
    {
      title: "Testing Taskbar",
      description: "Task desc in short",
      time: "12:30 PM",
      status: "To do",
    },
  ];

  const handleStatusStyle = (status) => {
    switch (status) {
      case "In progress":
        return "bg-[#FFE9E1] text-[#FF7E53]";
      case "Done":
        return "bg-[#EDE8FF] text-[#683EE3]";
      case "To do":
        return "bg-[#E3F2FF] text-[#0087FF]";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <>
      <div className="h-3/4 overflow-auto">
        {tasks.map((task, index) => (
          <div key={index} className={containerStyles}>
            <div className="flex flex-col justify-between items-start">
              <div className="text-md mb-1 lg:mb-2">{task.title}</div>
              <div className="text-sm text-gray-400 mb-1 lg:mb-2">
                {task.description}
              </div>
              <div className="flex items-center gap-1 flex-row">
                <img className="w-4 h-4" src={Clock} alt="clock-icon" />
                <span className="text-sm text-[#ab94ff]">{task.time}</span>
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
              <div
                className={`px-[10px] rounded-full ${handleStatusStyle(
                  task.status
                )}`}
              >
                {task.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskBox;
