import { useState } from "react";
import "./App.css";
import TaskBox from "./components/TaskBox/TaskBox";
import DateComponent from "./components/dateComponent/DateComponent";
import SortButton from "./components/SortingButton/SortButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <DateComponent />
        <SortButton />
        <TaskBox />
      </div>
    </>
  );
}

export default App;
