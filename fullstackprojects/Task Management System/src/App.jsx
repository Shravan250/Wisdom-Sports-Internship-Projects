import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <MainPage /> */}
        <CalendarPage/>
      </div>
    </>
  );
}

export default App;
