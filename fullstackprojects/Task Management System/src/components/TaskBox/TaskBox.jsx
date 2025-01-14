import React from "react";

const TaskBox = () => {
  return (
    <>
      {/* <div className="container">
        <div class="row">
          <div className="title">Testing TaskBar</div>
          <div className="desc">task desc in short</div>
          <div className="time">
            <i></i>
            <span>12:30 PM</span>
          </div>
        </div>
        <div class="row">
          <div className="btns-container">
            <button className="edit-btn"></button>
            <button className="delete-btn"></button>
          </div>
          <div className="status"></div>
        </div>
      </div> */}

      <div className="container">
        <div className="flex flex-row">
          <div className="title">Testing TaskBar</div>
          <div className="desc">task desc in short</div>
          <div className="time">
            <i></i>
            <span>12:30 PM</span>
          </div>
        </div>
        <div className="row">
          <div className="btns-container">
            <button className="edit-btn"></button>
            <button className="delete-btn"></button>
          </div>
          <div className="status"></div>
        </div>
      </div>
    </>
  );
};

export default TaskBox;
