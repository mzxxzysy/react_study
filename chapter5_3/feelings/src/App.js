import { DisplayMood } from "./components/DisplayMood/DisplayMood";
import { MenuList } from "./components/MenuList/MenuList";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <h1>오늘의 기분을 선택해 주세요!</h1>
      <div className="app-main">
        <MenuList mood={currentMood} onItemClick={setCurrentMood} />
        <DisplayMood mood={currentMood} />
      </div>
    </div>
  );
}

export default App;
