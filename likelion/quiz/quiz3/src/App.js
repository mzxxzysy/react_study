import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import React from "react";

function App() {
  return (
    <div>
      <Hello name="gary" />
      <Time />
      <Resume hello="안녕하세요" name="gary" hobby="게임" food="고기" color="blue" />
    </div>
  );
}
export default App;
