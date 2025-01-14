import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskBox from "./components/TaskBox/TaskBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <TaskBox />
      </div>
    </>
  );
}

export default App;
