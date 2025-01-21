import React from "react";
import Intro from "../components/Intro/Intro";
import DateComponent from "../components/dateComponent/DateComponent";
import SortButton from "../components/SortingButton/SortButton";
import TaskBox from "../components/TaskBox/TaskBox";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className="flex flex-row">
      <div className="flex w-1/2">
        <Intro />
      </div>
      <div className="flex flex-col w-1/2 gap-3 ">
        <DateComponent />
        <SortButton />
        <TaskBox />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
