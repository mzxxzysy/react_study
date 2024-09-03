import React from "react";
import { Resume } from "./components/Resume";
import { ColorText } from "./components/ColorText";

function App() {
  return (
    <React.Fragment>
      <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue" />

      <ColorText color="skyblue" />
      <ColorText color="seagreen" />
      <ColorText color="teal" />
    </React.Fragment>
  );
}
export default App;
