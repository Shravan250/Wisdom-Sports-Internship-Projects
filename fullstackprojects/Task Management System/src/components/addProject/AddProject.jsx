import React from "react";

const AddProject = () => {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-yellow-100 flex flex-col items-center justify-center gap-4 px-4">
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-[#24252C]">Add Project</h2>
      </div>

      <div className="w-full">
        <label class="block text-sm font-medium text-[#6E6A7C] text-left pl-2 mb-2">
          Task Group
        </label>
        <select class="w-full bg-white   rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>Personal</option>
          <option>Work</option>
          <option>Other</option>
        </select>
      </div>

      <div class="w-full">
        <label class="block text-sm font-medium text-[#6E6A7C] text-left pl-2 mb-2">
          Project Name
        </label>
        <input
          type="text"
          placeholder="Task Name"
          class="w-full bg-white rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div class="w-full">
        <label class="block text-sm font-medium text-[#6E6A7C] text-left pl-2 mb-2">
          Description
        </label>
        <textarea
          placeholder="Add your task description here"
          rows="4"
          class="w-full bg-white rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
      </div>

      <div class="w-full">
        <label class="block text-sm font-medium text-[#6E6A7C] text-left pl-2 mb-2">
          Start Date
        </label>
        <input
          type="date"
          class="w-full bg-white rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div class="w-full">
        <label class="block text-sm font-medium text-[#6E6A7C] text-left pl-2 mb-2">
          End Date
        </label>
        <input
          type="date"
          class="w-full bg-white rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button class="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 rounded-2xl ">
        Add Project
      </button>
    </div>
  );
};

export default AddProject;
